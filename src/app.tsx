import { useEffect, useState } from "react";
import {CheckAllButton, Container, Input, LabelCheckbox, CheckBoxContainer, Icon, Ul, Li, ContainerList, CheckList, LabelCheckList, SpanCheckList, ListMethods, ButtonsMehotds, Titulo, AnimationButton} from "./style"
import axios from "axios";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {Link, Route,BrowserRouter as Router, Routes } from "react-router-dom";
import TarefasList from "./components/listar-tarefas/TarefasList";

interface TarefasType{
    id: string;
    title: string;
    isDone: boolean;
}

export default function ListarTarefas(){
    
    var api = "http://localhost:3000/todos/";

    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState<TarefasType[]>([])
    const [checked, setChecked] = useState(Boolean);
    const [animationLeft, setAnimationLeft] = useState<Number>(-3);
    const [widthButton, setWidthButton] = useState<Number>(10);
    // Get Tarefas
    useEffect(() => {
      const getAll = async () => {
        await axios.get(api)
        .then((response) => setTarefas(response.data)
        )
        .catch((error) => console.log(error))
      }
      getAll();
    },[tarefa, tarefas])

    // Metodo para Excluirtodas tarefas Concluidas
    function ExcluirTodosConcluidos(){
        const iDTarefas = tarefas.filter((tarefa) => tarefa.isDone === true )
        iDTarefas.map((iDs) => {
            axios.delete(`${api}${iDs.id}`)
            .then(() => console.log(iDTarefas))
            .catch((error)=>console.log(error))
        })
    }

    // concluir todas as tarefas
    function ConcluirTudo(estado: boolean){
        tarefas.map((tarefa) => {
            axios.patch(`${api}${tarefa.id}`, {
                isDone: estado
            })
            .then((response)=>{
                console.log(response.data)
            })
            .catch((error) => console.log(error))
        })
    }

    // Adicionar tarefa
    function CriarTarefa(title: string){

        var id = Math.random().toString(36).substring(2);

        axios.post(api,{
            id,
            title,
            isDone: false
        })
        .then(()=> {
               setTarefas(tarefas)
        })
        .catch((error) => console.log(error))
    }

    // Tarefas a serem feitas
    const active = tarefas.filter((tarefa) => tarefa.isDone === false);
    // Tarefas Completas
    const completed = tarefas.filter((tarefa) => tarefa.isDone === true);
    return(
      <Router>
        <Container>
            <Titulo>Todos</Titulo>
            <ContainerList>
                <Input 
                onChange={(text: React.ChangeEvent<HTMLInputElement>) =>{setTarefa(text.target.value)}}
                onKeyUp={
                    (e: React.KeyboardEvent) => {
                        if (e.key == 'Enter') {
                            CriarTarefa(tarefa)
                    }}
                } 
                type="text"/>  
                {/*Botão para realiar tudo */}
                <CheckBoxContainer>
                    <LabelCheckbox htmlFor="togle" id={checked ? "checked" : ""} className="togle-label">
                        <Icon icon={faArrowDown}></Icon>
                    </LabelCheckbox>
                    <CheckAllButton className="togle" value="togle" id="togle" 
                    onClick={() => {
                            ConcluirTudo(checked)
                    }}
                    onChange={() => { 
                        setChecked(!checked)
                    }}
                    />
                </CheckBoxContainer>
              </ContainerList>

                {/* ROTAS */}
                  <Routes>
                    <Route path="/all" element={TarefasList(tarefas, setTarefas)}></Route>
                    <Route path="/active" element={TarefasList(active, setTarefas)}></Route>
                    <Route path="/completed" element={TarefasList(completed, setTarefas)}></Route>
                  </Routes>

                <ListMethods>
                  <Link to='/all'>
                    <ButtonsMehotds onClick={() => {
                      setAnimationLeft(-3)
                      setWidthButton(10)
                      }}>All</ButtonsMehotds>
                  </Link>
                  <Link to='/active'>
                    <ButtonsMehotds onClick={() => {
                      setAnimationLeft(47)
                      setWidthButton(13)
                      }}>Active</ButtonsMehotds>
                  </Link>
                  <Link to='/completed'>
                    <ButtonsMehotds
                    onClick={() => {
                      setAnimationLeft(123)
                      setWidthButton(20)
                      }}>Completed</ButtonsMehotds>
                  </Link>
                  <AnimationButton width={widthButton} left={animationLeft}></AnimationButton>
                  <ButtonsMehotds onClick={() => ExcluirTodosConcluidos()}>Clear Completed</ButtonsMehotds>
                </ListMethods>
        </Container>
      </Router>
    );
}
import { useEffect, useState } from "react";
import {CheckAllButton, Container, Input, LabelCheckbox, CheckBoxContainer, Icon, Ul, Li, ContainerList, CheckList, LabelCheckList, SpanCheckList} from "./style"
import axios from "axios";
import { faArrowDown, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { listenerCount } from "process";

interface TarefasType{
    id: string;
    title: string;
    isDone: boolean;
}

export default function ListarTarefas(){
    
    var api = "http://localhost:3000/todos/";
    // const { CriarTarefa } = useContext(Context);
    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState<TarefasType[]>([])
    const [checked, setChecked] = useState(Boolean);

    // Get Tarefas
    useEffect(()=>{
        axios.get(api)
        .then((response) => 
            {
                setTarefas(response.data)
            }
        )
        .catch((error) => console.log(error))
    },[])

    // Adicionar tarefa
    function CriarTarefa(title: string){

        var id = Math.random().toString(36).substring(2);

        axios.post(api,{
            id,
            title,
            isDone: false
        })
        .then(()=> console.log("Tarefa criada!"))
        .catch((error) => console.log(error))
    }

    function MudarEstadoTarefa(tarefaID: string, estado: boolean) {
            axios.patch(`${api}/${tarefaID}`, {
                isDone: estado
            }).then(() => { 
                console.log("Tarefa Feita "+ tarefaID)
            setTarefas(tarefas.map(tarefa => 
                tarefa.id === tarefaID ? { ...tarefa, isDone: estado } : tarefa
            ))
            }
            )
    }

    return(
        <Container>
            <ContainerList>
                <Input 
                onChange={(text)=>{setTarefa(text.target.value)}}
                onKeyUp={
                    (e) => {
                        if (e.key == 'Enter') {
                            CriarTarefa(tarefa)
                    }}
                } 
                type="text"/>  
                <CheckBoxContainer>
                    <LabelCheckbox htmlFor="togle" id={checked ? "checked" : ""} className="togle-label">
                        <Icon icon={faArrowDown}></Icon>
                    </LabelCheckbox>
                    <CheckAllButton className="togle" value="togle" id="togle" onChange={() => setChecked(!checked)}/>
                </CheckBoxContainer>
            </ContainerList>
            <Ul>
                {
                    tarefas.map((tarefa) => (
                        <Li key={tarefa.id}>
                            <LabelCheckList key={tarefa.id} id={tarefa.id} htmlFor={`togle-list-${tarefa.id}`} className="togle-list">
                                {
                                    !tarefa.isDone ? (
                                        <CheckList className="togle-list" 
                                        value={`togle-list-${tarefa.id}`}
                                        id={`togle-list-${tarefa.id}`} 
                                        onClick={()=>MudarEstadoTarefa(tarefa.id, true)}/>
                                    ): (
                                        <SpanCheckList onClick={()=>MudarEstadoTarefa(tarefa.id, false)} icon={faCircleCheck}/>
                                    ) 
                                }
                            </LabelCheckList>
                            <p>
                                {tarefa.title}
                            </p>
                        </Li>
                    ))
                }
            </Ul>
        </Container>
    );
}
import React from 'react';
import {Ul, Li,LabelCheckList, CheckList, SpanCheckList, TextList} from '../../style'
import {faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

interface TarefasType{
    id: string;
    title: string;
    isDone: boolean;
}

    const TarefasList = (tarefas: TarefasType[], setTarefas:React.Dispatch<React.SetStateAction<TarefasType[]>>) => {

    var api = "http://localhost:3000/todos/";

    function MudarEstadoTarefa(tarefaID: string, estado: boolean) {
        axios.patch(`${api}${tarefaID}`, {
            isDone: estado
        }).then(() => { 
            setTarefas(tarefas.map(tarefa => 
            tarefa.id === tarefaID ? { ...tarefa, isDone: estado } : tarefa
        ))
        }
        )
      }

    return(
        <Ul>
        { 
            tarefas.map((tarefa) => (
                <Li key={tarefa.id}>
                    <LabelCheckList key={tarefa.id} id={tarefa.id} htmlFor={`togle-list-${tarefa.id}`} className="togle-list">
                        {
                            tarefa.isDone === false ? (
                                <CheckList className="togle-list" 
                                value={`togle-list-${tarefa.id}`}
                                id={`togle-list-${tarefa.id}`} 
                                onClick={()=>MudarEstadoTarefa(tarefa.id, true)}/>
                            ): (
                                <SpanCheckList onClick={()=>MudarEstadoTarefa(tarefa.id, false)} icon={faCircleCheck}/>
                            ) 
                        }
                    </LabelCheckList>
                    <TextList>
                        {tarefa.title}
                    </TextList>
                </Li>
            ))
        }
        </Ul>
    )
}

export default TarefasList;
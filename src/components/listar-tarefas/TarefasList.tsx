import React, { useState } from 'react';
import {Ul, Li,LabelCheckList, CheckList, SpanCheckList, TextList, Icon, DeleteTarefa} from '../../style'
import {faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

interface TarefasType{
    id: string;
    title: string;
    isDone: boolean;
}
interface DeleteButtonType{
    opacity:number;
    id:string;
}

const TarefasList = (tarefas: TarefasType[], setTarefas:React.Dispatch<React.SetStateAction<TarefasType[]>>) => {
    const [opacity, setOpacity] = useState<number>(0);
    
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
                <Li key={tarefa.id} onMouseEnter={()=>setOpacity(1)} onMouseLeave={()=>setOpacity(0)}>
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
                    <DeleteTarefas id={tarefa.id} opacity={opacity}></DeleteTarefas>
                </Li>
            ))
        }
        </Ul>
    )
}

const DeleteTarefas = ({id, opacity}: DeleteButtonType) =>{
    return(
        <DeleteTarefa key={id} id={id} opacity={opacity} icon={faXmark}/>
    )
}

export default TarefasList;
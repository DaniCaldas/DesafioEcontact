import axios from "axios";
import {createContext, useEffect, useState} from 'react'
import db from "../db.json"

interface DefaultTypes{
    children: JSX.Element;
}

interface TarefaTypes{
    id: string;
    title: string;
    isDone: boolean;
}

interface ContextTypes{
    CriarTarefa: (title:string) => void;
}

export const Context = createContext({} as ContextTypes);

export default function UseContext({children}:DefaultTypes) {

   


    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    );
}
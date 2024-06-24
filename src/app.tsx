import React from "react";
import { Section, Div } from "./style"
import ListarTarefas from "./components/listar-tarefas/listar_tarefas";

export default function App() {
  return (
    <Section>
      <Div>
      <h1>Todos</h1>
      <ListarTarefas/>
      </Div>
    </Section>
  );
}

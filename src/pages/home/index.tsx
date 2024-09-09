import React, { useContext, useEffect } from "react";
import "./style.css"
import { ContextoTema } from "../../context/contextTema";

const Home = () => {
    const tema = useContext(ContextoTema)

    useEffect(() => {
        console.log('tema home: ', tema)
    }, [tema])

    return (
        <div>
            <div className="container main-content">
                <h2>O que é um To-Do List?</h2>
                <p>Um to-do list (lista de tarefas) é uma ferramenta para organizar e gerenciar atividades e responsabilidades. É basicamente uma lista onde você anota tudo o que precisa fazer. Aqui está uma visão geral de como funciona e para que serve:</p>
                
                <h2>Como Funciona:</h2>
                <p><strong>Criação de Tarefas:</strong> Você escreve todas as tarefas ou atividades que precisa realizar. Pode incluir tarefas diárias, semanais, ou mesmo metas de longo prazo.</p>
                <p><strong>Organização:</strong> Muitas listas permitem categorizar as tarefas por prioridade, data de vencimento ou tipo de atividade. Algumas também permitem adicionar detalhes ou notas adicionais para cada tarefa.</p>
                <p><strong>Marcação:</strong> À medida que você conclui cada tarefa, você a marca como completa. Isso ajuda a visualizar o progresso e manter-se motivado.</p>
                <p><strong>Atualização:</strong> As listas podem ser atualizadas regularmente com novas tarefas ou ajustes nas existentes.</p>
                <p><strong>Lembretes e Notificações:</strong> Algumas ferramentas de to-do list oferecem lembretes e notificações para garantir que você não esqueça tarefas importantes.</p>

                <h2>Para Que Serve:</h2>
                <p><strong>Produtividade:</strong> Ao listar e priorizar tarefas, você pode gerenciar melhor seu tempo e aumentar sua produtividade.</p>
                <p><strong>Objetivos e Planejamento:</strong> Ter um plano claro das suas responsabilidades pode reduzir o estresse associado a tarefas esquecidas ou sobrecarga de trabalho.</p>
                <p><strong>Objetivos e Planejamento:</strong> Permite o acompanhamento de objetivos e o planejamento a longo prazo, ajudando a definir e alcançar metas.</p>
                <p><strong>Eficiência:</strong> Facilita a identificação de tarefas concluídas e pendentes, tornando o trabalho mais eficiente e estruturado.</p>
            </div>
        </div>
    )
}

export default Home;
import './index.scss';
import { getTasks } from '../../../api';
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem/TodoItem';

const ViewTodo = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { tasksBD } = await getTasks();
                console.log('Tarefas recebidas:', tasksBD);
                setTasks(tasksBD || []);  // "|| []" Adaptacao, para garantir que taskBD venha como array vazio.
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            <table className="ViewTodo">
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Status</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.length > 0 ? ( 
                        tasks.map((task) => (
                            <TodoItem
                                key={task.id}
                                {...task}
                            />
                        ))
                    ) : ( // Caso nao tenha nenhuma tarefa, "Cadastre uma nova tarefa!" sera acionado.
                        <tr>
                            <td colSpan={3} style={{textAlign: 'center'}}>Cadastre uma nova tarefa!</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ViewTodo;


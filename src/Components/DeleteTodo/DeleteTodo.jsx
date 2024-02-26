import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTask} from '../../../api';



import './index.scss'
import ConfirmDelete from './ConfirmDelete/ConfirmDelete';

const DeleteTodo = () => {


    const { id } = useParams();
    const [taskData, setTaskData] = useState(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const taskInfo = await getTask(id);
                setTaskData(taskInfo);
            } catch (error) {
                console.error('Erro ao buscar tarefa:', error);
            }
        };

        fetchTask();
    }, [id]);



    return (
        <div className='DeleteTodo'>
            <div className='DeleteTodo__InfoDelete'>
                <h1>Deseja excluir esse item?</h1>
                {taskData ? (
                    <div className='DeleteTodo__p'>
                        <p>Titulo: {taskData.title}</p>
                        <p>Descrição: {taskData.description}</p>
                    </div>
                ) : (
                    <p>Nenhuma tarefa encontrada</p>
                )}

                    <ConfirmDelete id={id}/>       
            </div>
        </div>
    );
};

export default DeleteTodo;



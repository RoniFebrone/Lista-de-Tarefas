import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTask} from '../../../api';



import './index.scss'
import ConfirmEdit from './ConfirmEdit/ConfirmEdit';

const EditTodo = () => {


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
    }, [id]); // O efeito será reexecutado sempre que o ID mudar



    return (
        <div className='EditTodo'>
            <div className='EditTodo__InfoDelete'>
                <h1>Deseja editar esse item?</h1>
                {taskData ? (
                    <div className='EditTodo__p'>
                        <p>Titulo: {taskData.title}</p>
                        <p>Descrição: {taskData.description}</p>
                    </div>
                ) : (
                    <p>Nenhuma tarefa encontrada</p>
                )}

                    <ConfirmEdit id={id}/>       
            </div>
        </div>
    );
};

export default EditTodo;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTask } from '../../api';
import ConfirmEdit from './ConfirmEdit/ConfirmEdit';

import './index.scss';

interface TaskDataType {
    title: string;
    description: string;
}

const EditTodo = () => {
    const { id } = useParams<{ id: string }>();
    const [taskData, setTaskData] = useState<TaskDataType | null>(null);

    useEffect(() => {
        const fetchTask = async () => {
            if (!id) return;
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
                {id && <ConfirmEdit id={id} />}
            </div>
        </div>
    );
};

export default EditTodo;

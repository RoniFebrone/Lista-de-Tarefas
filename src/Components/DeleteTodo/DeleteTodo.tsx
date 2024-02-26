import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTask } from '../../api'
import ConfirmDelete from './ConfirmDelete/ConfirmDelete';

import './index.scss';

interface TaskData {
    title: string;
    description: string;
}

const DeleteTodo: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [taskData, setTaskData] = useState<TaskData | null>(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                if (id) { // Verifica se id não é undefined
                    const taskInfo = await getTask(id);
                    setTaskData(taskInfo);
                }
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
                <ConfirmDelete id={id} title={taskData?.title || ''} description={taskData?.description || ''} />
            </div>
        </div>
    );
};

export default DeleteTodo;

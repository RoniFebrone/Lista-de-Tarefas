import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTask } from "../../api";
import GoBackBt from "../../Components/Navgation/Buttons/GoBackBt";
import TodoDetail from "./TodoDetail/TodoDetail";

import { BsCheck2Square } from "react-icons/bs";
import { FaRegSquare } from "react-icons/fa";

import './index.scss';

interface TaskDataType {
    title: string,
    description: string,
    completed:boolean,

}

const DetailTodo = () => {
    const { id } = useParams();
    const [task, setTask] = useState<TaskDataType | null>(null)
    

    useEffect(() => {
        const fetchTask = async () => {
            try {
                if (id) {
                    const taskData = await getTask(id);
                    setTask(taskData);
                }
            } catch (error) {
                console.error('Erro ao buscar a tarefa:', error);
            }
        };

        fetchTask();
    }, [id]);

    const renderCompletionIcon = () => {
        if (task?.completed) {
            return <BsCheck2Square size={23} className="completed-icon" />;
        } else {
            return <FaRegSquare size={23} className="not-completed-icon" />;
        }
    };

    return (
        <div className="DetailTodo">
            <div className="DetailTodo__btn">
                <GoBackBt />
            </div>
            <div className="DetailTodo__details">
                
            {task && ( // Verifica se task não é nulo antes de renderizar os detalhes
                    <>
                        <TodoDetail
                            label="Título"
                            value={task.title || ""}
                            type="text"
                        />

                        <TodoDetail
                            label="Descrição"
                            value={task.description || ""}
                            type="text"
                        />

                        <TodoDetail
                            label="Concluído"
                            value={renderCompletionIcon()}
                            type="custom"
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default DetailTodo;
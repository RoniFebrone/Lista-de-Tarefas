import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsInfoCircleFill, BsCheck2Square } from "react-icons/bs";
import { FaRegSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { updateTask } from "../../../api"; 

import './index.scss';

export interface TaskType {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

const TodoItem = ({ id, title, description, completed }: TaskType ) => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(completed);

    const handleGoToTaskDetails = () => {
        navigate(`/tasksBD/${id}`);
    };

    const handleGoToDeleteTodo = () => {
        navigate(`/tasksBD/D/${id}`);
    };
    const handleGoToEditTodo = () => {
        navigate(`/tasksBD/E/${id}`);
    };

    const handleCheckboxChange = async () => {
        try {
            // Envie a alteração para o banco de dados
            await updateTask(id, {
                title,
                description,
                completed: !isChecked
            });
    
            // Atualiza o estado local apenas após a confirmação do banco de dados
            setIsChecked(!isChecked);
        } catch (error) {
            console.error('Erro ao atualizar a tarefa:', error);
        }
    };

    return (
        <tr className={`TodoItem ${isChecked ? 'completed-task' : ''}`}>
            <td className="TodoItem__firt--td">
                {isChecked ? <del>{title}</del> : title}
            </td>

            <td>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    readOnly
                />
                <div className="TodoItem__Checkbox" onClick={handleCheckboxChange}>
                    {isChecked ? <BsCheck2Square /> : <FaRegSquare />}
                </div>
            </td>

            <td>
                <button className="TodoItem__BtIcon" onClick={handleGoToTaskDetails}>
                    <BsInfoCircleFill size={24} />
                </button>

                <button className="TodoItem__BtIcon" onClick={handleGoToEditTodo}>
                    {<MdEdit size={24} />}
                </button>

                <button className="TodoItem__BtIcon" onClick={handleGoToDeleteTodo}>
                    <FaTrash size={23} />
                </button>
            </td>
        </tr>
    );
};

export default TodoItem;

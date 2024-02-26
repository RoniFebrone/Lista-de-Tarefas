import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTask, updateTask } from '../../../../api';

import {BsCheck2Square } from "react-icons/bs";
import { FaRegSquare } from "react-icons/fa";

import './index.scss';

const ViewEdit = () => {
    const { id } = useParams();
    const [task, setTask] = useState({
        title: '',
        description: '',
        completed: false,
    });

    const navigate = useNavigate();
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const taskData = await getTask(id);
                setTask(taskData);
                setIsCompleted(taskData.completed);
            } catch (error) {
                console.error('Erro ao buscar a tarefa:', error);
            }
        };

        fetchTask();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleToggleCompletion = () => {
        const updatedIsCompleted = !isCompleted;
        setIsCompleted(updatedIsCompleted);  
        setTask((prevTask) => ({ ...prevTask, completed: updatedIsCompleted }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateTask(id, task);
            // Navegar para a página principal
            navigate(`/`);
        } catch (error) {
            console.error('Erro ao atualizar a tarefa:', error);
        }
    };

    return (
        <div className='TaskEdit'>
            <h1>Editar Tarefa</h1>
            <div className="TaskEdit__form">
                <form>
                    <div className='form__input'>
                        <label>
                            Título:
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={task.title}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form__textarea'>
                        <label>
                            Descrição:
                        </label>
                        <textarea
                            name="description"
                            value={task.description}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='TaskEdit__checked'>
                        <div className='TaskEdit__input-checked'>
                            <label>
                                Concluído:
                            </label>
                            
                            <div className='TaskEdit__icon--checkbox' onClick={handleToggleCompletion}>
                            {isCompleted ? <BsCheck2Square /> : <FaRegSquare />}
                            </div>
                        </div>
                        <div className='TaskEdit__BTsave'>
                            <button onClick={handleSubmit}>Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ViewEdit;

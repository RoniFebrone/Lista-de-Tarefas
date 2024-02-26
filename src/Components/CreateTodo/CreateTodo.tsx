import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from '../../api.ts'

import './index.scss'

const CreateTodo = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Cria tarefa
        const newTask = {
            title,
            description,
            completed: false,
        };
        // Chamar a função para criar a tarefa
        await createTask(newTask);
        navigate("/");
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form__input">
                    <label>
                        Título
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>

                <div className="form__textarea">
                    <label>
                        Descrição
                    </label>
                    <textarea
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>

                <div className="form__BTsubmit">
                    <button type="submit">Criar Tarefa</button>
                </div>
            </form>
        </div>
    );
}

export default CreateTodo;

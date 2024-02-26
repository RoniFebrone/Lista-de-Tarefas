import React from 'react';
import './index.scss';
import { deleteTask } from '../../../api';
import { useNavigate } from 'react-router-dom';

interface ConfirmDeleteProps {
    id?: string; 
    title: string;
    description: string;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ id }) => {
    const navigate = useNavigate();

    const handleDeleteTask = async () => {
        try {
            if (id) { // Verifica se id não é undefined
                await deleteTask(id);
                console.log(`Tarefa com ID ${id} excluída com sucesso.`);
                navigate('/');
            }
        } catch (error) {
            console.error(`Erro ao excluir tarefa com ID ${id}.`, error);
        }
    };

    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <div className='ConfirmDelete'>
            {id && ( // Verifica se id não é undefined antes de renderizar os botões
                <div className='DeleteTodo__Bts'>
                    <button className='DeleteTodo__Bt-confirm' onClick={goToHomePage}>
                        Não
                    </button>
                    <button className='DeleteTodo__Bt-confirm' onClick={handleDeleteTask}>
                        Sim
                    </button>
                </div>
            )}
        </div>
    );
};

export default ConfirmDelete;

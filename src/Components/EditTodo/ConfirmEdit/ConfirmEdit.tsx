import './index.scss';
import { useNavigate } from 'react-router-dom';

interface ConfirmEditProps {
    id: string;
}

const ConfirmEdit: React.FC<ConfirmEditProps> = ({ id }) => {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/');
    };

    const goToEditTodo = () => {
        navigate(`/tasksBD/E/${id}/C`);
    };

    return (
        <div className='ConfirmEdit'>
            <div className='ConfirmEdit__Bts'>
                <button className='ConfirmEdit__Bt-confirm' onClick={goToHomePage}>
                    Não
                </button>
                <button className='ConfirmEdit__Bt-confirm' onClick={goToEditTodo}>
                    Sim
                </button>
            </div>
        </div>
    );
};

export default ConfirmEdit;

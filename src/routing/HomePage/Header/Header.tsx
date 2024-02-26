import './index.scss'
import { useNavigate } from 'react-router-dom'


function Header() {
    
    const navigate = useNavigate();
    
    const goToHomePage = () => {
        navigate("/")
    } 

    return (
        <div className='Header'>
                
            <nav className='Header__Nav'>
                <ul>
                    <li> Organização</li>
                    <li id='task' onClick={goToHomePage}>Tarefas</li>
                </ul>
            </nav>
            <section className='Header__section'>
                <h1> Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            </section>
        </div>
    )
}

export default Header
import CreateTodo from '../../Components/CreateTodo/CreateTodo'
import './index.scss'
import GoBackBt from '../../Components/Navgation/Buttons/GoBackBt'

const VCreateTodo = () => {
    return (
        <div className='VCreateTodo'>           
                <div className='VCreateTodo__Bt'>
                    <GoBackBt />
                </div>
                <CreateTodo />
            
        </div>
    )
}

export default VCreateTodo
import React from 'react'
import './index.scss'

import ViewTodo from '../../Components/ViewTodo/ViewTodo'
import { Link } from 'react-router-dom'
import { IoAddOutline } from "react-icons/io5";


const TodoList = () => {
    return (
        <div className='container'>
            <div className='TodoList'>
                <div className='TodoList__Components'>

                    <div className='TodoList__ViewTodo'>
                        <ViewTodo />
                    </div>

                    <div className='TodoList__Link'>
                        <div className='TodoList__Link--a'>

                            <Link to="/create-todo">
                                Criar nova tarefa
                            </Link>

                            <Link to="/create-todo">
                                <IoAddOutline size={30} />
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TodoList
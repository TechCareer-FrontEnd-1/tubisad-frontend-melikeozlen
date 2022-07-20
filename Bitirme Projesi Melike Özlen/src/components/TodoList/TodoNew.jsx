import React, { useState } from 'react'
import './Todo.scss'
const TodoNew = () => {
    const [newTodo, setNewTodo] = useState("")
    const [todo, setTodo] = useState([
        { title: "HTML", done: true },
        { title: "CSS", done: true },
        { title: "JavaScript", done: true },
        { title: "ReactJS", done: true },
        { title: "NodeJS", done: null },
        { title: "MongoDB", done: null }

    ])

    const addTodo = () => {
        if (newTodo === "" || newTodo === null) {
            alert("Boş Alanları Doldurunuz")
        } else {
        setTodo([...todo, { title: newTodo }])
        setNewTodo("")
        }
    }


    return (
        <div id='todo' className='text-dark container my-todo'>
            <div className='row  mx-auto'>
                <h3 className='mx-auto text-info' style={{ fontWeight: "400", fontSize: "1.3rem" }}>Öğrenilecekler Listesi...</h3>
                <div className='form-group d-flex gap-2 mx-auto'>
                    <input type='text' className='form-control' placeholder='Konu...' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} style={{ outline: "none", border: "1px solid #00c9db" }} />
                    <button className='btn btn-outline-info' onClick={addTodo}>Ekle</button>
                </div>

                <div>
                    <ul>
                        {todo.map((item, index) => {
                            return <li key={index} className='d-flex gap-4 align-items-center '>
                                <input type='checkbox' checked={item.done} style={{ width: "1rem", padding: "1rem" }} />
                                <p className='text-dark col-md-11'>{item.title}</p>
                            </li>
                        }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoNew
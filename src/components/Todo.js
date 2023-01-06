import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import Modal from "./Modal";
import Input from "./Input";
import {useSelector} from "react-redux";

const Todo = () => {
    const [activeModal, setActiveModal] = useState(false)
    const todos = useSelector((state) => state.todo.todos);
    const count = useSelector((state) => state.todo.count);
    return (
        <div className='todo'>
            <div className="todo__container">
                <button className='todo__button button' onClick={() => setActiveModal(true)}>ADD NEW STUDENT</button>
                <div className="todo__tr"></div>
                <div className="todo__list">
                    <div className="todo__name">Name</div>
                    <div className="todo__name">Email</div>
                    <div className="todo__name">Phone</div>
                    <div className="todo__name">Enroll Number</div>
                    <div className="todo__name">Date of admission</div>
                </div>
                <Modal active={activeModal} setActive={setActiveModal}>
                    <Input/>
                </Modal>
                {count > 0 && todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                    />
                ))}
                {count === 0 && <h1 className='no'>NO TODO</h1>}
            </div>
        </div>
    );
};

export default Todo;
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../store/todo/todoSlice";

const Input = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
    };

    return (
        <div className="input">
            <div className="input__container">
                <button className="input__button button">ADD TO AVATAR<span className='_icon-pencil'></span></button>
                <div className="input__list">
                    <input
                        onInput={(e) => setInput(e.target.value)}
                        type="text"
                        className='input__index'
                        placeholder='NAME'/>
                    <input
                        onInput={(e) => setInput(e.target.value)}
                        type="text"
                        className='input__index'
                        placeholder='EMAIL'/>
                    <input
                        onInput={(e) => setInput(e.target.value)}
                        type="text"
                        className='input__index'
                        placeholder='PHONE'/>
                    <input
                        onInput={(e) => setInput(e.target.value)}
                        type="text"
                        className='input__index'
                        placeholder='ENROLL NUMBER'/>
                    <input
                        onInput={(e) => setInput(e.target.value)}
                        type="text"
                        className='input__index'
                        placeholder='Date of admission'/>
                </div>
                <button className="todo__button button"
                        onClick={handleAddTodo}
                >ADD TO STUDENT</button>
            </div>
        </div>
    );
};

export default Input;
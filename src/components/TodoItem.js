import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeTodo} from "../store/todo/todoSlice";

const TodoItem = ({text}) => {
    const dispatch = useDispatch()
    const handleRemoveTodo = (id) => {
        id.preventDefault()
        dispatch(removeTodo(id));
    };
    useEffect(() => {

    }, []);
    return (
        <div className="todo__box todo-box">
            <div className="todo-box__email">{text}</div>
            {/*<div className="todo-box__phone"></div>*/}
            {/*<div className="todo-box__number"></div>*/}
            {/*<div className="todo-box__date"></div>*/}
            {/*<div className="todo-box__pencil _icon-pencil"></div>*/}
            <button className="todo-box__trash _icon-bin2" onClick={handleRemoveTodo}></button>
        </div>
    );
};

export default TodoItem;
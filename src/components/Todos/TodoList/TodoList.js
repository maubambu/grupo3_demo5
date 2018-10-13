import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
const TodoList = (props) => {

    let list = props.list.map((todo, index) => {
        return (
            <li key={index}>
                <Checkbox onChange={(e) => props.statusChange(e, index)} checked={todo.finalizada}></Checkbox>
                {todo.tarea}
            </li>
        )
    })

    return (
        <ul>
            {list}
        </ul>
    )
}

export default TodoList;
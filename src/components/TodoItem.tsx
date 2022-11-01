import {Todo} from "../utils/Todo";
import {useState} from "react";
import "./todoItem.css";

type PropsType = {
    todo: Todo;
}

export function TodoItem(props: PropsType){
    const {todo} = props;
    const [description, setDescription] = useState(todo.description);
    const [completed, setCompleted] = useState(todo.completed);

    const handleComplete = () => {
        setCompleted(!completed);
    }
    return (
        <div className="todo__item">
            <input type="checkbox"
                   defaultChecked={completed}
                   required={true}
                   onClick={handleComplete}/>
            <div>
                {description}
            </div>
            {/*<button>Delete</button>*/}
        </div>
    )
}
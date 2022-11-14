import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {TodoActionsType} from "../redux/action";

export function Header(){

    const [text, setText] = useState('');
    const dispatch = useDispatch();


    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setText(e.target.value);

    const handleKeyDown = (e: any) => {
        const trimmedText = e.target.value.trim();

        if(e.key === "Enter" && trimmedText){
            dispatch({type: TodoActionsType.ADD_TODO, payload: trimmedText });
            setText('');
        }
    }

    return (
        <input
            type="text"
            placeholder="What needs to be done?"
            value={text}
            autoFocus={true}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    )
}
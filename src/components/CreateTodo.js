import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {Todo} from "./Todo";
export function CreateTodo({value,getComplete, getRemove}) {
    return (
        <div className='create_todo'>
            <form action="">
                <input type="text"/>
            </form>
            <div className="important">
                <input type="checkbox"/>
            </div>
        </div>
    )
}
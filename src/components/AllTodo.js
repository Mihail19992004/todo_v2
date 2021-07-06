import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {Todo} from "./Todo";
import {BigTodo} from "./BigTodo";
export function AllTodo({value,getComplete, getRemove}) {
    if (value.length) {
        localStorage.setItem('data', JSON.stringify(value))
    }
    return (
        <div className='todos-style' >
            <div className="big_todo">
                {
                    value.map((e,i)=> e?.description  ?
                        (<BigTodo getRemove={getRemove} getComplete={getComplete} value={value} e={e} i={i}/>)
                        : null)

                }

            </div>
            <div className="small_todo">
                {

                        value.map((e,i)=> !e?.description ?
                            (<Todo getRemove={getRemove} getComplete={getComplete} value={value} e={e} i={i}/>)
                            : null)

                }
            </div>

        </div>
    )
}
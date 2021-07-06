import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
export function Todo({value,getComplete, getRemove,e,i}) {
    if (value.length) {
        localStorage.setItem('data', JSON.stringify(value))
    }
    return (
        <div style={{width: '100%' }}>
            {

                        <div className="todo-style small_t"  style={{textDecoration: e.complete ? 'line-through' : null , background: e.color
                            }}>
                            <h2>{e.search}</h2>
                            <div className="done" onClick={()=>getComplete(i)}>
                                {
                                    e.complete ? <DoneIcon /> : <CheckCircleOutlineIcon />
                                }

                            </div>
                            <div className="remove" onClick={()=> getRemove(i)}>
                                <CloseIcon />
                            </div>
                        </div>

            }
        </div>
    )
}
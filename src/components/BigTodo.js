import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
export function BigTodo({value,getComplete, getRemove,e,i}) {
    if (value.length) {
        localStorage.setItem('data', JSON.stringify(value))
    }
    return (
        <div style={{width: '100%', background: e.color}}>
            {

                <div className="todo-style big_t" style={{textDecoration: e.complete ? 'line-through' : null,
                }}>
                    <h2>{e.search}</h2>
                    {
                        e.description ? <div className="desc-todo">
                            <p>Описание</p>
                            <p>{e.description}</p>

                        </div> : null
                    }
                    <div className="date">
                        <p>{e.time}</p>
                    </div>
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
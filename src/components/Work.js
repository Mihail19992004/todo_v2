import React, {useEffect, useState} from 'react'
import {Todo} from "./Todo";
import {BigTodo} from "./BigTodo";

export function Work({value, getComplete, getRemove}) {



    return (
        <div className='todos-style'>
            {
                value.map((e,i)=> e?.type === 'Работа' ?
                    (<BigTodo getRemove={getRemove} getComplete={getComplete} value={value} e={e} i={i}/>)
                    : null)
            }
        </div>
    )
}
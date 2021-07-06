import React, {useState} from 'react'
import {colors} from "@material-ui/core";

export function Search({value, setValue, setUpt}) {
    const [imp, setImp] = useState(false)
    const [search, setSearch] = useState('')
    const [type, setType] = useState('')
    const [descr, setDescr] =useState('')
    const [doneDescr, setDoneDescr] = useState('')
    function getTypes(e) {
        setType(e.target.value)
    }
    function createTodo(e) {
        let rand = Math.floor(0 - 0.5 + Math.random() * (9-0 + 1))
        const color = ["#f346ff", "#8a498e","#dca5e3", "#351939","#f346ff", "#8a498e","#f346ff", "#8a498e","#f346ff", "#8a498e"]
        e.preventDefault()


        setUpt(value.length)
        setValue([...value, {search, imp, type, complete: false, description: doneDescr, color: color[rand] ,time: new Date().toString()}])

        console.log(value)
    }
    if (value.length) {
        localStorage.setItem('data', JSON.stringify(value))
    }
    function addDescr(e) {
        localStorage.setItem('data', JSON.stringify(value))
        e.preventDefault()
        setDoneDescr(descr)
        setDescr('')
        console.log(value)
    }
    function getDescr(e) {
        localStorage.setItem('data', JSON.stringify(value))
        setDescr(e.target.value)

    }
    function checkThis(e) {
        localStorage.setItem('data', JSON.stringify(value))
        setImp(!imp)
        if (imp){
            setSearch({
                ...search,
                imp
            })
        }

    }

    function getSearch(e) {
        localStorage.setItem('data', JSON.stringify(value))
        localStorage.setItem('data', JSON.stringify(value))
        setSearch(e.target.value)
    }
    return (
        <div className='search-main'>

            <form action="submit" onSubmit={createTodo} className='todo-form'>
                <input value={search} type="text" onChange={getSearch}/>

            </form>
            <div className="options">
                <div className="import">
                    <input type="checkbox" checked={imp} onChange={checkThis}/>
                    <p>Задайте важность</p>
                </div>

                <select className='changeType' onChange={getTypes}>
                    <option>Выберите тип</option>
                    <option>Дом</option>
                    <option>Работа</option>
                </select>
                <form action="" className='description' onSubmit={()=>addDescr}>
                    <p>Добавте описание</p>
                    <textarea wrap='soft' value={descr} onChange={getDescr} />
                    <button type='submit' onClick={(e)=>

                        addDescr(e)
                    }>Подтвердить</button>
                    <p>{doneDescr}</p>
                </form>

            </div>



        </div>
    )
}
import React, {useEffect, useState} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import {Search} from "./Search";
import { NavLink } from "react-router-dom";
import {Important} from "./Important";
import {AllTodo} from "./AllTodo";
import {Work} from "./Work";
import {Home} from "./Home";
import {CreateTodo} from "./CreateTodo";

export function Content() {
    const [comp, setCompl] = useState(false)
    const [value, setValue] = useState([])
    const [ws, setWs] = useState(false)
    const [upt, setUpt] = useState(value.length)
    const [count, setCount] = useState(0)
    let colors = ['rgba(49,139,135,0.42)','rgba(47,106,104,0.47)', 'rgba(68,151,124,0.46)', 'rgba(49,139,111,0.51)', '#5e8b31']
    console.log(value)
    function getRemove(ind) {
        localStorage.setItem('data', JSON.stringify(value))
        setValue(value.filter((e,i)=>ind !== i))
        console.log(value[0], ind)
    }
    function getComplete(e) {
        localStorage.setItem('data', JSON.stringify(value))
        setCompl(!comp)
        value[e] = {
            ...value[e],
            complete: comp
        }
        console.log(value[e].complete)
    }

    useEffect(()=> {

        setValue(JSON.parse(localStorage.data) )


    }, [] )
    const openDiv = {
        width: ws ? "0" : null,
        fontSize: ws ? '0' : null
    }

    return (

        <div className="content">
            <BrowserRouter>
            <section className="left" style={openDiv}>
                <div className="title">
                    <h2>Category</h2>
                </div>
                <NavLink to={"/search"} style={openDiv}>
                <div className="category" onClick={()=>setCount(1)} style={{background : window.location.href==='http://localhost:3000/search' ? colors[count] : null}}>
                    <h2>Создать задачу</h2>
                </div>
                </NavLink>
                <NavLink to={"/all"}>
                    <div onClick={()=>setCount(2)} style={{background : window.location.href==='http://localhost:3000/all' ? colors[count] : null}} className="category">
                        <h2>Все задачи</h2>
                    </div>
                </NavLink>
                <NavLink to={"/important"}>
                <div onClick={()=>setCount(3)} style={{background : window.location.href==='http://localhost:3000/important' ? colors[count] : null}} className="category">
                    <h2>Важное</h2>
                </div>
                </NavLink>
                <NavLink to={"/home"} >
                    <div className="category" onClick={()=>setCount(4)} style={{background : window.location.href==='http://localhost:3000/home' ? colors[count] : null}}>
                        <h2>Дом</h2>
                    </div>
                </NavLink>
                <NavLink to={"/work"}>
                    <div onClick={()=>setCount(5)} style={{background : window.location.href==='http://localhost:3000/work' ? colors[count] : null}} className="category">
                        <h2>Работа</h2>
                    </div>
                </NavLink>

            </section>

            <section className="right" style={{background: colors[count]}}>
                <div style={{width: '30px', transitionDuration: '0.2s', padding: '20px', marginLeft: '20px'}} className={ws? "active-menu" : null} >
                    <MenuOpenIcon  onClick={()=> setWs(!ws)} />
                </div>

                    <Switch>
                        <Route exact path='/search' component={()=><Search setUpt={setUpt} value={value} setValue={setValue} />}/>
                        <Route path='/important' component={()=><Important value={value} getComplete={getComplete} getRemove={getRemove} />} />
                        <Route path='/all' component={()=><AllTodo value={value} getComplete={getComplete} getRemove={getRemove}  />} />
                        <Route path='/home' component={()=><Home value={value} getComplete={getComplete} getRemove={getRemove}  /> } />
                        <Route path='/work' component={()=><Work value={value} getComplete={getComplete} getRemove={getRemove} />} />
                        <Route path='/test' component={()=><CreateTodo value={value} getComplete={getComplete} getRemove={getRemove} />} />

                    </Switch>

            </section>
        </BrowserRouter>
        </div>
    )
}
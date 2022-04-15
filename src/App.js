import './App.css';
import ListItem from "./components/ListItem";
import {useEffect, useState} from "react";
import {generateColor} from "./utils/generateColor";
import React from "react";


function App() {
    //1
    const [list, setList] = useState([])
    const obj = {
        id: 0,
        color: generateColor(),
        title: "Hello World",
    }
    //
    // //2
    useEffect(() => {
        const data = window.localStorage.getItem("wakanda-forever")
        console.log(typeof JSON.parse(data))
        if(data) {
            setList(JSON.parse(data))
        }
    }, [])
    //
    useEffect(() => {
        if(list.length){
            window.localStorage.setItem("wakanda-forever",JSON.stringify(list));
        }
    }, [list])

    //3
    const addCard = () => {
        const id = list.length? list[list.length - 1].id + 1: 1
        setList(prev => [...prev, {...obj,id}])

    }
    // //4
    return (
    <div className="App">

        <div>
            <button onClick={addCard} type='button'>Add Hello World</button>
        </div>
        <div className="listContainer">
            {list && list.map((card) => <ListItem key={card.id} item={card} list={list} setList={setList}/>)}
        </div>
        <li>
        <a href="/">Home</a>
        </li>
        <li>
        <a href="/about">About</a>
        </li>

        <p>Loren</p>

    </div>
    );
}
export default App;

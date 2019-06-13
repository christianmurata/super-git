import React from "react"
import Clock from "../../components/clock"

import "./style.css"

const data = [
    {name : 'Repo 1', desc: "just test", link: "https://www.google.com"},
    {name : 'Repo 2', desc: "just test 2", link: "https://www.google.com"}
];

const MainBK = () => {
    return (
        <>
            <h1> Super Git </h1>

            <Clock></Clock>
            
            <ul>
                {data.map((item) => 
                    <li>
                        <span> {item.name} </span>
                        <span> {item.desc} </span>
                        <a href={item.link}>{item.link}</a> 
                    </li>)
                }
            </ul>
        </>
    );
};

export default MainBK;
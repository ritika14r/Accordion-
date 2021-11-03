import React,{useState} from "react";
import {questions} from "./AcordianApi";
import './Acordion.css';
import MyAcordion from "./MyAcordion";

const Acordion=()=>{
    const [data,setData]=useState(questions)
    return(
        <>
        <section className="main-div">
            <h1>FAQ</h1>
        {
            data.map((currData)=>{
                return <MyAcordion  key={currData.id} {...currData}/>
            })
        }
        </section>
        </>
    )
}
export default Acordion;
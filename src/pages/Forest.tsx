import React, { useEffect, useState } from "react";
import LineGraph from "../components/LineGraph";
import PieChart from "../components/PieChart";
import {forests} from './data'

export default function Forest(props:{id:number}) {

    const initialState = ()=>{
        return forests.filter((forest)=>forest.id === props.id)[0]
    }
    const [forest, setForest] = useState(()=>initialState())
    const [show, setShow] = useState(false)

    useEffect(()=>{
        setShow(true)
    },[])
    
    return (
        <div className="flex flex-col p-4">
            <h1 className="text-center text-5xl p-3 text-grey-300 font-bold mt-5">Live Forest Fire Data</h1>
            <div>
                <h3 className="text-left text-2xl px-3 float-left">{forest.title}</h3>
                <h5 className="pt-1">{forest.coordinates}</h5>
            </div>
            <p className="px-3 py-2 float-right">{forest.body}</p>

            <div className="flex justify-between items-center p-4 w-full border border-gray-400 mt-4">
        
                <div className="w-[60rem] h-[35rem]">
                    <LineGraph show={show} label={forest.title} />
                </div>
                <div className="w-[30rem] h-[35rem]">
                    <PieChart show={show} />
                </div>
            </div>
        </div>        
    );
}
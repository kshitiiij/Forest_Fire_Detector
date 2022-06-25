import { Link } from "raviger";
import React, { useEffect, useState } from "react";
import LineGraph from "../components/LineGraph";
import LiveIcon from "../components/LiveIcon";
import PieChart from "../components/PieChart";
import {forests} from './data'

export default function Forest(props:{id:number}) {

    const initialState = ()=>{
        return forests.filter((forest)=>forest.id === props.id)[0]
    }
    const [forest, setForest] = useState(()=>initialState())
    const [show, setShow] = useState(false)
    const [fire, setFire] = useState(false)

    useEffect(()=>{
        setShow(true)
    },[])

    const renderResult = ()=>{

        if(fire)
        {
            return  (
                <>
                <img className="mt-3 w-20 h-20" src="../images/fire.gif" />
                <h3 className="text-red-500">Fire Detected</h3>
                </>
            );
        }
        else
        {
            return  (
                <>
                <img className="mt-3 w-20 h-20" src="../images/tree.gif" />
                <h3 className="text-green-500">No Fire Detected</h3>
                </>
            );
        }
    }
    
    return (
        <div className="flex flex-col p-4">
            <h1 className="text-center text-5xl p-3 text-grey-300 font-bold mt-5">Live Forest Fire Data</h1>
            <div className="flex space-x-2 justify-center mb-4">
                <Link href="/" type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Home</Link>
            </div>
            <div>
                <h3 className="text-left text-2xl px-3 float-left">{forest.title}</h3>
                <h5 className="pt-1">{forest.coordinates}</h5>
            </div>
            <p className="px-3 py-2 float-right">{forest.body}</p>

            <div className="flex justify-between items-center p-4 w-full border border-gray-400 mt-4 rounded-lg shadow-lg bg-white">
        
                <div className="w-[60rem] h-[35rem]">
                    <LineGraph show={show} label={forest.title} />
                </div>
                <div className="w-[30rem] h-[35rem]">
                    <PieChart show={show} />
                </div>
            </div>
            <div className="flex flex-col mt-5 p-4 justify-center items-center">
                <LiveIcon />
                
                {renderResult()}
                
            </div>
        </div>        
    );
}
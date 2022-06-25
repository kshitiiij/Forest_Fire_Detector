import React, { useState } from "react";
import {forests} from './data'

export default function Forest(props:{id:number}) {

    const initialState = ()=>{
        return forests.filter((forest)=>forest.id === props.id)[0]
    }
    const [forest, setForest] = useState(()=>initialState())
    
    return (
        <div>
            <h1 className="text-center text-5xl p-3 font-bold mt-5">Forest Fire Detection</h1>
            <h3 className="text-left text-2xl px-3 float-left">{forest.title}</h3>
            <h5 className="pt-1">{forest.coordinates}</h5>
            <p className="px-3 py-2 float-right">{forest.body}</p>
            <img className="rounded-t-lg float-left py-10 px-2  object-cover h-100 w-96" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
            <img className="rounded-t-lg float-right py-10 px-2 object-cover h-100 w-96" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
        </div>        
    );
}
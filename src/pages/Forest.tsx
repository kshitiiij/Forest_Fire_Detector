import React, { useState } from "react";
import {forests} from './data'

export default function Forest(props:{id:number}) {

    const initialState = ()=>{
        return forests.filter((forest)=>forest.id === props.id)[0]
    }
    const [forest, setForest] = useState(()=>initialState())
    
    return (
        <h1 className="text-center">{forest.title}</h1>
    );
}
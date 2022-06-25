import React from "react";
import Card from "../components/Card";
import {forests} from "./data"



export default function Home() {

    return (
        <div>
            <h1 className="text-center text-3xl text-orange-500 font-bold mt-5">Early Forest Fire Detection</h1>
            <p className="text-center text-lg text-gray-500">Quote/Moto</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-5">
                {forests.map((forest)=>(
                    <Card key={forest.id} id={forest.id} title={forest.title} location={forest.location} body={forest.body} update_time={forest.update_time} />
                ))}
            </div>
        </div>
    );
}
import React from "react";
import Card from "../components/Card";
import {forestFields} from '../types/objects'


const body = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
const forests:forestFields[] = [
 {
     id:1,
     title: "Gir National Park",
     location: "Gujarat",
     body: body,
     update_time: 1
 },
 {
    id:2,
    title: "Jim Corbett National Park",
    location: "Uttrakhand",
    body: body,
    update_time: 1
 },
 {
    id:3,
    title: "Kanha National Park",
    location: "Madhya Pradesh",
    body: body,
    update_time: 2
 },
 {
    id:4,
    title: "Jakanari Reserve Forest",
    location: "Uttrakhand",
    body: body,
    update_time: 2
 },
 {
    id:5,
    title: "Sundarbans",
    location: "West Bengal",
    body: body,
    update_time: 1
 }

]

export default function Home() {

    return (
        <div>
            <h1 className="text-center text-3xl text-orange-500 font-bold mt-5">Early Forest Fire Detection</h1>
            <p className="text-center text-lg text-gray-500">Quote/Moto</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-5">
                {forests.map((forest)=>(
                    <Card key={forest.id} title={forest.title} location={forest.location} body={forest.body} update_time={forest.update_time} />
                ))}
            </div>
        </div>
    );
}
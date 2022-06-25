import React from "react";

export default function Card(props:{title:string, location:string, body:string, update_time:number}) {

    return (
        
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            {/* Image here */}
            <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
            </a>
            <div className="p-6">
            {/* Card Content */}
            <div className="flex flex-col items-center">
                <h5 className="text-gray-900 text-xl underline font-bold">{props.title}</h5>
                <p className="text-gray-500 text-sm italic mb-2">Location:{props.location}</p>
                <p className="text-gray-700 text-base mb-4 text-center">
                    {props.body}
                </p>
                <button type="button" className=" inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">Explore</button>
            </div>
            </div>
            <div className="flex justify-center py-3 px-6 border-t border-gray-300 text-gray-600">
                Updated {props.update_time} days ago
            </div>
        </div>
        
    );  
}
import React from "react";

export default function InputFile(props:{value:string, onChange:(e:any)=>void, onClick:()=>void, loading:boolean}) {

    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            
            <div className="form-group mb-6">
                <input 
                type="text"
                value={props.value}
                onChange={props.onChange} 
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
                placeholder="URL"/>
            </div>
            {!props.loading? 
            <button onClick={props.onClick} className="w-full px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">
                Predict
            </button>
            :
            <div className="flex justify-center items-center">
                <div className="spinner-border text-orange-500 animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            }
           
        
        </div>
    );
}
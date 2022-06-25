const API_BASE_URL = "http://127.0.0.1:8000/api/"

type RequestMethod = 'POST'
type RequestBody = {
    image: string
}

const request = async (endpoint: string, method:RequestMethod = 'POST', data:any = {})=>{

    const response = await fetch(API_BASE_URL + endpoint, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if(response.ok) {
        const json = await response.json();
        return json;
    } else {
        const errorJson = await response.json()
        throw Error(errorJson);
    }
} 

export const predictClass = (data:RequestBody)=> {
    return request('predict', 'POST', data)
}
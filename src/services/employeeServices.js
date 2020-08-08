const API_URL = "http://localhost:3000"

async function request(endPoint, body){
    let headers = {"content-type": "application/json"};
    if(body?.headers) headers = {...headers, ...body.headers}
    return fetch(API_URL+endPoint,{
        ...body,
        headers
    });
}

export async function listEmployees(){
    const response = await request("/employees", {
        method: "GET"
    })
    const data = await response.json();
    if(!response.ok) throw new Error(data.error);
    return data.body;
}

export async  function getEmployee(id){
    const response = await request(`/employees/${id}`, {
        method: "GET"
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    return data.body;
}
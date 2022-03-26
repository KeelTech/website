export const API_GET = (url, headers)=>{

    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(response => response.json())
        .then((resp)=>{
            resolve(resp)
        }).catch((e)=>{
            reject();
        })
    })
}

export const API_POST = (url, data, headers={})=>{

    return new Promise((resolve, reject)=>{
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then((resp)=>{
            resolve(resp)
        }).catch((e)=>{
            reject();
        })
    })
}
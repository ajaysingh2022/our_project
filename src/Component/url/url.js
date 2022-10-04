import React from 'react'

const url = () => {
    const URL = "https://jsonplaceholder.typicode.com/posts"
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    //step1
    // console.log(xhr.readyState);
    // xhr.open("GET", URL);
    // // console.log(xhr.readyState);
    // xhr.onreadystatechange = function () {
    //     // console.log(xhr.readyState);
    //     if(xhr.readyState===4){
    //         // console.log(xhr.response);
    //         // console.log(typeof xhr.response);
    //         const response = xhr.response;
    //         const data = JSON.parse(response)
    //         console.log(data);
    //         console.log(typeof data);

    //     }
    // }
    // xhr.send();
    xhr.open("GET", URL);
    xhr.onload=()=>{
        if(xhr.status>=200 && xhr.status<300){
            const data = JSON.parse(xhr.response);
            // console.log(data);
            const id = data[3].id
            console.log(id);
        }
    }


    return (
        <>
            <h2>Hello</h2>

        </>
    )
}

export default url

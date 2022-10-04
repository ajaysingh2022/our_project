import React from 'react'
import { flushSync } from 'react-dom'

const Async = () => {
    const URL = "https://jsonplaceholder.typicode.com/posts"

    // async function getPosts(){
    //     const response = await fetch(URL);
    //    const data =  await response.json();
    //     // console.log(response);
    //     // console.log(data);
    //     return data;
    // }
    // const myData = getPosts();
    // console.log(myData);

    const getPosts = async() => {

        const response = await fetch(URL);
        const data = await response.json();
        // console.log(response);
        // console.log(data);
        return data;

    }
    getPosts()
        .then(myData => {
            console.log(myData);
        })
        .catch(error => {
            console.log("inside catch");
        })


    // fetch(URL,{
    //     method: "GET",
    //     body: JSON.stringify({
    //         title: "foo",
    //         body: "bar",
    //         userId : 1
    //     }),
    //     headers: {
    //         'content-type' : 'apllication/json',
    //     },
    // })
    // .then(response=>{
    //     return response.json()
    //  } )
    //  .then(data=>{
    //     console.log(data);
    //  })

    return (
        <>
            <h2>Async Await</h2>
        </>
    )
}

export default Async

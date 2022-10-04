import React from 'react'

const FetchApi = () => {
    const URL = "https://jsonplaceholder.typicode.com/posts"

    fetch(URL , {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    .then(response=>{
        // console.log(response.json());
        return response.json()
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.log("inside catch");

    })
  return (
    <div>
      FetchApi
    </div>
  )
}

export default FetchApi

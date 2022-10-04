import React from 'react'

const Practice = () => {
    const[data, setData]=React.useState({
        name:"",
        Email:"",
        Contact:"",
        Address:"",
        Company:""
    })

   

    const addUser=()=>{
        let user= {...data}
        fetch("https://633420df433198e79dd0869d.mockapi.io/Mockapi",{
            method:'POST',
            headers:{
                'Accepts':'application/json',
                'Content-Type':'application/json'
            }, 
            body:JSON.stringify(user)
        }).then((result)=>result.json())
        .then((resp)=>{console.log("data coming", resp);
    })
        setData({
            name:"",
            Email:"",
            Contact:"",
            Address:"",
            Company:""
        })
    }

  return (
    <div>
      <h2>
        Post Method
      </h2>
      <input type="text" name='name' value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}/><br />
      <input type="text" name='email' value={data.Email} onChange={(e)=>setData({...data, Email:e.target.value})}/><br />
      <input type="text" name='contact'value={data.Contact} onChange={(e)=>setData({...data, Contact:e.target.value})}/><br />
      <input type="text" name='address' value={data.Address} onChange={(e)=>setData({...data, Address:e.target.value})}/><br />
      <input type="text" name='company' value={data.Company} onChange={(e)=>setData({...data, Company:e.target.value})}/><br />
      <button type='button' onClick={addUser}>Add User</button>

    </div>
  )
}

export default Practice









// import React, { useEffect } from 'react'

// const Practice = () => {
//     const [data, setData] = React.useState([])


//     const getDelete = () => {
//         fetch("https://633420df433198e79dd0869d.mockapi.io/Mockapi")
//             .then((result) => result.json())
//             .then((resp) => {
//                 console.log("resp", resp);
//                 setData(resp);
//             })
//     }
//     useEffect(() => {
//         getDelete()
//     }, [])

//     const deleteButton = (id) => {
//         fetch(`https://633420df433198e79dd0869d.mockapi.io/Mockapi/${id}`, {
//             method: "DELETE"
//         }).then((result) => result.json())
//             .then((resp) => { console.log("delete", resp); })
//         getDelete()
//     }
//     return (
//         <>
//             <div>
//                 <h1>
//                     API Data
//                 </h1>
//                 <table border="1">
//                     <tr>
//                         <td>ID</td>
//                         <td>Name</td>
//                         <td>Email</td>
//                         <td>Contact</td>
//                         <td>Address</td>
//                         <td>Company</td>
//                     </tr>
                    
//                         {data.map((item, id) => {
//                             return (
//                                 <tr key={id}>
//                                     <td>{item.id}</td>
//                                     <td>{item.name}</td>
//                                     <td>{item.Email}</td>
//                                     <td>{item.Contact}</td>
//                                     <td>{item.Address}</td>
//                                     <td>{item.Company}</td>
//                                     <td><button type='button' onClick={() => deleteButton(item.id)}>Delete</button></td>
//                                 </tr>
//                             )
//                         })

//                         }
                    
//                 </table>
//             </div>
//         </>
//     )
// }

// export default Practice

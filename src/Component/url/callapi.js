// import React, { useEffect } from 'react'

// const Index = () => {
//     const [data, setData] = React.useState([])
//     React.useEffect(() => {
//         // provide api url
//         fetch("https://633420df433198e79dd0869d.mockapi.io/Mockapi").then((result) => {
//             result.json().then((resp) => {
//                 console.log("result", resp);
//                 setData(resp)
//             })
//         })
//     }, [])
//     console.log(data);

//     return (
//         <>
//             <div>
//                 Get Method Api Data
//                 <table border="2">
//                     <tr>
//                         <td>id</td>
//                         <td>name</td>
//                         <td>email</td>
//                         <td>phone</td>
//                     </tr>
//                     {
//                         data.map((item) =>
//                             <tr>
//                                 <td>{item.id}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.Email}</td>
//                                 <td>{item.Contact}</td>
//                             </tr>
//                         )
//                     }
//                 </table>
//             </div>
//         </>
//     )
// }

// export default Index

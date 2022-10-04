import React from 'react'

const Postmethod = () => {
    const [data, setData] = React.useState({
        name: "",
        Email: "",
        Contact: "",
        Address: "",
        Company: ""
    })

    // const saveUser = () => {
    //     console.log("data", data);
    //     let user = { ...data }
    //     fetch("https://633420df433198e79dd0869d.mockapi.io/Mockapi", {
    //         method: "POST",
    //         headers: {
    //             'Accepts': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     }).then(result => result.json())
    //         .then(resp => {
    //             console.log("resp", resp);
    //         })
    // }
    function addUser() {
        console.log("data", data);
        let user = { ...data }
        fetch("https://633420df433198e79dd0869d.mockapi.io/Mockapi", {
            method: 'POST',
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((result) =>result.json()
            // console.log(result);

        )
            .then((resp) => {
                console.log("response", resp);
                // setData(resp);

            })
    }

    // console.log("data", data);
    return (
        <>
            <div>
                <h1>Post method</h1>
                <input type="text" value={data.name} name='name' onChange={e => setData({ ...data, name: e.target.value })} /><br /><br />
                <input type="text" value={data.Email} name='email' onChange={e => setData({ ...data, Email: e.target.value })} /><br /><br />
                <input type="text" value={data.Contact} name='contact' onChange={e => setData({ ...data, Contact: e.target.value })} /><br /><br />
                <input type="text" value={data.Address} name='address' onChange={e => setData({ ...data, Address: e.target.value })} /><br /><br />
                <input type="text" value={data.Company} name='company' onChange={e => setData({ ...data, Company: e.target.value })} /><br /><br />
                <button type="button" onClick={addUser}>Add User</button>
            </div>

        </>
    )
}

export default Postmethod

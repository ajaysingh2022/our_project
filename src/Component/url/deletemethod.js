import React from 'react'

const Deletemethod = () => {
    const [data, setData] = React.useState([])
    const [name, setName] = React.useState({
        name: "",
        Email: "",
        Contact: "",
        Address: "",
        Company: ""
    })

    React.useEffect(() => {
        getDelete()
    }, [])

    const getDelete = () => {
        fetch("https://633420df433198e79dd0869d.mockapi.io/Mockapi")
            .then((result) => result.json())
            .then((resp) => {
                console.log("resp", resp);
                setData(resp)
                setName(resp[0], { ...name })
            })
    }

    const deleteButton = (id) => {
        fetch(`https://633420df433198e79dd0869d.mockapi.io/Mockapi/${id}`, {
            method: "DELETE"
        })
            .then((result) => result.json())
            .then((resp) => {
                console.log("resp", resp);
                getDelete()
            })
    }
    function selectUpdate(id) {
        let master = data[id - 2];
        console.log("id", data[id - 2]);
        setName(master, { ...name })
    }
    const updateUser = () => {
        let item = { ...name }
        console.log("item", item);
        fetch(`https://633420df433198e79dd0869d.mockapi.io/Mockapi/${item.id}`, {
            method: "PUT",
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then((result) => result.json())
            .then((resp) => {
                console.log("resp", resp);
                getDelete()
            })
    }
    return (
        <>
            <h1>Delete Data</h1>
            <table border="1">
                <tbody>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Contact</td>
                            <td>Address</td>
                            <td>Company</td>
                            <td>Option</td>
                        </tr>
                    </thead>
                    {data.map((item, i) => {
                        return (
                            <thead>
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Contact}</td>
                                    <td>{item.Address}</td>
                                    <td>{item.Company}</td>
                                    <td><button type='button' onClick={() => deleteButton(item.id)}>Delete</button></td>
                                    <td><button type='button' onClick={() => selectUpdate(item.id)}>Update</button></td>

                                </tr>
                            </thead>
                        )
                    }
                    )}
                </tbody>
            </table>
            <input type='text' value={name.name} onChange={(e) => setName({ ...name, name: e.target.value })} />
            <input type='text' value={name.Email} onChange={(e) => setName({ ...name, Email: e.target.value })} />
            <input type='text' value={name.Contact} onChange={(e) => setName({ ...name, Contact: e.target.value })} /><br />
            <button type='button' onClick={updateUser}>Update Data</button>
        </>
    )
}

export default Deletemethod

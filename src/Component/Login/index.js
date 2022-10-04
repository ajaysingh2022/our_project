import React from 'react'
import LoginForm from './form'

const Index = () => {
    const initialInput = { email: "ourproject@gmail.com", password: "Password@123" }
    // const [login, setLogin] = React.useState(initialInput)
    const [user, setUser] = React.useState({ name: "", email: "" });
    const [error, setError] = React.useState("")

    const Login = details => {
        console.log(details);
        if(details.email==initialInput.email && details.password==initialInput.password )
        {
            console.log("Login");
            setUser({
                name:details.name,
                email:details.email
            })
        }
        else{
            console.log("details not match");
            setError('details not match');
        }
    }

    const Logout = () => {
        console.log("Logout");
        setUser({name:"", email:""});
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setLogin(true)
    // }
    // const handlechange = (e) => {
    //     let name = e.target.name;
    //     let val = e.target.value;
    //     setLogin({ ...login, [name]: val })
    // }
    return (
        <>
            {/* <form onSubmit={handleSubmit} className=''>
                <label>Email</label>
                <input
                    type="text"
                    placeholder="email"
                    name="email or phone"
                    onChange={handlechange}
                    required>
                </input>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="User Name"
                    name="password"
                    onChange={handlechange}
                    required>
                </input>
                <label>Remember me</label>
                <input
                    type="checkbox"
                    placeholder="User Name">
                </input>
                <button type='Submit'>Submit</button>
            </form> */}

            {(user.email != "") ? (
                <div className='welcome'>
                    <h2>Welcome</h2>
                    <span>{user.name}
                    </span>
                    <button onClick={Logout}>Logout</button>
                </div>
            )
                : (
                    <LoginForm Login={Login} error={error}/>
                )
            }
        </>
    )
}

export default Index

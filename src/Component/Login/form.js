import React from 'react'

const Form = (props) => {
    const [details, setDetails]=React.useState({
        name:"",
        email:"",
        password:""
    });
    const submitHandler= e=>{
        e.preventDefault();

        props.Login(details);
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Login</h2>
                    {/* Error  */}
                    {(props.error!="")?(<div>{props.error}</div>):""}
                    <div className='form-group'>
                        <label htmlfor='name'>Name:</label>
                        <input type='text' onChange={(e)=>{setDetails({...details, name:e.target.value})}} 
                        value={details.name} name='name' id='name'/>
                    </div>
                    <div className='form-group'>
                        <label htmlfor='email'>Email:</label>
                        <input type='email' onChange={(e)=>{setDetails({...details, email:e.target.value})}} 
                        value={details.email} name='email' id='email' />
                    </div>
                    <div className='form-group'>
                    <label htmlfor='Password'>Password</label>
                    <input type='password' onChange={e=>setDetails({...details, password:e.target.value})}
                    value={details.password} name='password' id='password' />
                    </div>
                    <input type='submit' value='LOGIN' />
                </div>
            </form>

        </>
    )
}

export default Form

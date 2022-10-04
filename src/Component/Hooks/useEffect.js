import React from 'react'

const Effect = () => {
  const [name, setName] = React.useState("");
  const [toggle, setToggle]= React.useState("");
  const [state, setState] = React.useState({
    name: '',
    selected: false,
    age:20,                           //if we have more properties
    city:"  "
  });
  
  React.useEffect(() => {
    console.log("state updated");
  },[state.name, state.selected]);            //it will rerender only on these two state only
  React.useEffect(()=>{
    console.log("toggle effect run");
    //toggle


    // return a clean up function
    return()=>{
      console.log("wait! before runnint the effect i should clean here");
      // clear something from the previous effect 
      console.log("okey done! you can run!");
    }
  }, [toggle])
  
  const handleAdd=()=>{
    setState(prev=>({...prev, name}))
    console.log("spread",prev=>({...prev, name}));
  }
  
  
  const handleSelect=()=>{
    setState(prev=>({...prev,  selected:true}))
    console.log("spread",prev=>({...prev, selected:true}));
  }

  return (
    <>
      <div>
        <input type='text' onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      {`{
        name:${state.name},
        selected:${state.selected.toString()}
      }`

      }
      </div>

    </>
  )
}

export default Effect

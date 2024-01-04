import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [result,setresult] =useState([]);
  const [index,setindex]=useState('');
  const [view,setview]=useState('');
  const title = useRef();
  const author = useRef();
  const storage=JSON.parse(localStorage.getItem("detail"))||[];
 
   const addHandle=()=>{
    const data={
     title:title.current.value,
     author:author.current.value,
    };
     storage.push(data);
     localStorage.setItem("detail",JSON.stringify(storage));
     setresult(storage);
   }
   const deleteHandle=(index)=>{
    console.log(index);
    storage.splice(index,1);
    localStorage.setItem("detail",JSON.stringify(storage));
    setresult(storage);
   }
   const viewHandle=(val,ind)=>{
       setview(val);
       setview(ind);
   }
   const Handle=(e)=>{
    setview({...view,[e.taget.name]:e.target.value});
   }
   const updateHandle=()=>{
    console.log(view);
    console.log(index);
    storage.splice(index,1,view);
    localStorage.setItem("detail",JSON.stringify(storage));
    setresult(storage);
   }
   useEffect(()=>{
    setresult([...storage]);
   },[]);
 
  return (
    
    <div>

      <input class='m-2' type='text' name='title'ref={title} onChange={Handle}/>
      <br/>
      <input class='m-2' type='text'name='author'ref={author} onChange={Handle}/>
      <br/>
      <button class='btn btn-info d-flex m-2' onClick={addHandle}>Add</button>
      <div>
        {
          result?.map((val,ind)=>{
            return(
              <div>
                <h1>{val.title}</h1>
                <h2>{val.author}</h2>
                <button onClick={deleteHandle}>Delete</button>
                <button onClick={viewHandle} >View</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
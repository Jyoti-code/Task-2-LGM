// import React from "react";
import React, { useState, useEffect } from 'react'
import Loading from './loading';
import Githubusers from './githubusers';

export const App = ()=>{
  const [users,setUsers]=useState([]);
  const [loading, setloading]=useState(false);
  const getUsers=async()=>{
    try{
      setloading(false);
      const response=await fetch('https://api.github.com/users');
      setUsers(await response.json());
    }catch(error){
    console.log(error);
    }

  }
  useEffect(()=>{
    getUsers();
  },[]);

  if(loading){
    return <Loading/>
  }

  return (
    <>
    <Githubusers users={users}/>
</>
  )
}
export default App;
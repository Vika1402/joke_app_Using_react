import React, { useState } from 'react'

export default function Joker2() {


  let comeJoke= async()=>{
    let url="https://official-joke-api.appspot.com/random_joke";
    let response= await fetch(url);
    let jsonResponse=await response.json();
   
    setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})

  }

  let [joke,setJoke]= useState({});

  return (
    <div>
      <h2>Click and Jolyy jokes</h2>

      <h3>{joke.setup}</h3>
      <p>{joke.punchline}</p>
      <button onClick={comeJoke}>joke</button>
    </div>
  )
}

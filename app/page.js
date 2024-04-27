"use client"
import React, {useState} from "react";
const page = () => {
  const[title, settitle]=useState("")
  const[desc, setdesc] =useState("")
  const submitHandler=(e)=>{
e.preventDefault()
console.log(title)
console.log(desc)
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
      MY TODO-LIST</h1>
    <form>
      <input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder="Enter Task Here" value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}></input>
      <input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder="Enter Description Here" value={desc} onChange={(e)=>{
        setdesc(e.target.value)}}></input>
      <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded">Add Task</button>
    </form>
    </>
  )
}

export default page
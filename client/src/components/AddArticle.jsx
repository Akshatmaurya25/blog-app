import React from 'react'
import { useState } from 'react'
import axios from "axios"


export default function AddArticle() {

  const [user, setUser] = useState("")
  const [title, setTitle] = useState("")
  const [des, setDes] = useState("")
 
  const currentDate = new Date();

// Get date components
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because January is 0
const day = String(currentDate.getDate()).padStart(2, '0');

// Get time components
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

// Format date and time
const formattedDate = `${year}-${month}-${day}`;
const formattedTime = `${hours}:${minutes}:${seconds}`;

  var date = `${formattedDate} at ${formattedTime}`


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:2525/addArticle', { title, des, user, date })
      .then(result => {
        console.log(result)
        alert("Submitted")

      })
    .catch(err=>console.log(err))

  }


  return (
    <div className='dark:bg-gray-800 h-full min-h-screen flex items-center justify-center flex-col w-full'>
      <h2>Add your Article!</h2>
      <form onSubmit={handleSubmit} action="" className='flex flex-col h-fit w-2/6 justify-center items-center text-black'>
        <input placeholder='Username' className='m-3 p-3 rounded-lg  w-full' type="text" value={user} onChange={(e) => setUser(e.target.value)} name="" id="" />
        <input placeholder='Title' className='m-3 p-3 rounded-lg  w-full' type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="" id="" />
        <textarea placeholder='Your Description' className='m-3 p-3 rounded-lg w-full' value={des} onChange={(e) => setDes(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
        <button className='bg-blue-700  text-white p-3 rounded-lg' type='submit'> Submit</button>
      </form>
    </div>
  )
}

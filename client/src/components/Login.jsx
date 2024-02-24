import React from "react";
import { useState } from 'react';
import "../index.css"

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email, " and ", password)
  }

  return (
    <div className="flex flex-col justify-center items-center bg-slate-900 h-4/6 w-3/6 max-h-fit">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start">
          <label htmlFor="Email">Email</label>
          <input
            className="outline-none border  px-4 py-2 my-3 w-80 rounded-md focus:border-p text-slate-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id=""
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="Password">Password</label>
          <input
            className="outline-none border  px-4 py-2 my-3 w-80 rounded-md focus:border-p text-slate-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="email"
            id=""
          />
        </div>
        <div>
          <button className="btn1" type="submit">
            Log In
          </button>
          <button className="btn2" type="submit">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

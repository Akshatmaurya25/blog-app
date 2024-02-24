import React from "react";
import { useState } from "react";


export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    alert("Welcome " + name + ", You are registered!");
    console.log(name + " and " + email + " and " + password);
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-900 h-4/6 w-3/6 max-h-fit">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start">
          <label htmlFor="Email">Name</label>
          <input
            className="outline-none  border-2 px-4 py-2 my-3 w-80 rounded-md focus:border-p text-slate-900"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="email"
            id=""
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="Email">Email</label>
          <input
            className="outline-none  border-2 px-4 py-2 my-3 w-80 rounded-md focus:border-p text-slate-900"
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
            className="outline-none  border-2 px-4 py-2 my-3 w-80 rounded-md focus:border-p text-slate-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="email"
            id=""
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="Confirm_Password">Confirm Password</label>
          <input
            className="outline-none  border-2 px-4 py-2 my-3 w-80 rounded-md focus:border-p text-slate-900"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="email"
            id=""
          />
        </div>
        <div>
          <button className="btn1" type="submit">
            Sign Up
          </button>
          <button className="btn2" type="reset">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

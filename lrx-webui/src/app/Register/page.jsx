'use client'

import { useState } from "react";
import Nav from "../components/Nav";
import Link from "next/link";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [error, setError] = useState("");



  const handleSubmit = async (e) => 
    {
    e.preventDefault(); 

    if (password !== confirm_password) 
    {
      setError("Passwords do not match!");
      return;
    }

    if (!username || !email || !password || !confirm_password) 
    {
      setError("Please complete all inputs!");
      return;
    }

    
    
        
    }


  return (
    <>
      <Nav />
      <div className="max-w-[500px] mx-auto border shadow-lg mt-[120px] p-14 rounded-3xl ">
        <div className="flex justify-center items-center h-[100px]">
          <p className="text-4xl font-bold">Welcome to LRX</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col p-3">
          {error && (
            <div className="flex justify-center mb-4">
            <p className="text-white bg-red-500 text-center border  h-[40px] flex items-center justify-center rounded-lg w-[220px]">
              {error}
            </p>
          </div>
          )}
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-lg m-2 h-10 p-3 duration-300 border-black hover:scale-105"
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg m-2 h-10 p-3 duration-300 border-black hover:scale-10"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg m-2 h-10 p-3 duration-300 border-black hover:scale-105"
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            onChange={(e) => setConfirm_password(e.target.value)}
            className="border rounded-lg m-2 h-10 p-3 duration-300 border-black hover:scale-105"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-black text-white h-[40px] duration-300 rounded-full w-full hover:scale-105"
            >
              Register
            </button>
          </div>
            <div className="flex mt-3">
            <p className="text-slate-500">Already have an account?</p>
            <p className="ms-1 text-slate-600 hover:underline cursor-pointer hover:text-[#092093]"><Link href={'/Login'}>Login</Link></p>
            </div>
        </form>
      </div>
    </>
  );
};

export default Register;
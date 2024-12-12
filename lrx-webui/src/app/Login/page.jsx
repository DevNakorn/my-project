'use client'


import Nav from "../components/Nav"
import Link from "next/link"


const Login = () => {
  return (
    <>
        <Nav />

        <div className="max-w-[500px] mx-auto border shadow-lg mt-[120px] p-14 rounded-3xl ">

            <div className="flex justify-center items-center h-[100px]">
                <p className="text-4xl font-bold">Welcome to LRX</p>
            </div>

            <form action="#" className="flex flex-col p-3">
                <input className="border rounded-lg m-2 h-10 p-3 duration-300 border-black hover:scale-105 hover:border-2" type="text" name="username" placeholder="Username " required/>                
                <input className="border rounded-lg m-2 h-10 p-3 duration-300 border-black hover:scale-105 hover:border-2" type="password" name="password" placeholder="Password" required/>               
                 <div className="flex justify-center mt-4">
                    <button className="bg-black text-white h-[40px] duration-300 rounded-full w-full hover:scale-105">Login</button>
                </div>
                <div className="flex mt-3">
                    <p className="text-slate-500">No account?</p>
                    <p className="ms-1 text-slate-600 hover:underline cursor-pointer"><Link href={'/Register'}>Create one</Link></p>
                </div>
            </form>

        </div>
    </>
    
  )
}
export default Login
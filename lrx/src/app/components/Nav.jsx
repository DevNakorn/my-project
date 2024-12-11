import Link from "next/link"

const Nav = () => {
  return (
        <div className="bg-black flex justify-between text-white items-center h-[70px] p-3 ">
            <div>
                <Link className="ms-4 text-4xl font-bold duration-300 hover:text-[#092093]" href="/">LRX</Link>
            </div>
            <div className="">
                <Link className="m-4 duration-300 hover:text-[#929292]" href="/Login">Login</Link>
                <Link className="m-4 p-3 rounded-full bg-[#4262FF] duration-300 hover:bg-[#092093] " href="/Register">Register</Link>
            </div>
        </div>
        
  )
}
export default Nav
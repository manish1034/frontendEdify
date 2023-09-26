import { login } from "../assets";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative bg-[rgb(242,241,236)] flex flex-row justify-around rounded-b-3xl mb-20">

        {/* Left */}
        <div className="mt-[8%] mr-[8rem]">
            <img src={login} alt="" className="w- full h-[100vh]"></img>
        </div>
        
        {/* right */}
        <div className="flex flex-col gap-6 mt-[18%] mr-[19%] w-[55vh]">
            <div className="text-5xl font-mono text-black text-center mb-6">Login</div>
            <div className="text-2xl text-black mr-32">This is my Email</div>
            <input className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
            <div className="text-2xl text-black mr-32">This is my Password</div>
            <input className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
            <button className="bg-black rounded-lg h-12 text-white">Login</button>    
            <h1 className="text-black/60 text-center text-lg font-sans">Not a member!?
                <span className="cursor-pointer text-black/60 text-lg font-sans">
                    <Link to='/signup'> Signup</Link>
                </span>
            </h1>       
        </div>

    </div>
  )
}

export default Login;
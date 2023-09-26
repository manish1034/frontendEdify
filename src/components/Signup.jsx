import { signup } from "../assets";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="relative bg-[rgb(242,241,236)] flex flex-row justify-around rounded-b-3xl mb-20 h-[160vh]">

        {/* Left */}
        <div className="mt-[16%] mr-[5rem] p-8">
            <img src={signup} alt="" className="w- full h-[100vh] rounded-3xl"></img>
        </div>
        
        {/* right */}
        <div className="flex flex-col gap-6 mt-[12%] mr-[15%] w-[60vh]">
            <div className="text-5xl font-mono text-black text-center mb-6">Signup</div>
            <div className="text-2xl text-black mr-32">Username</div>
            <input className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
            <div className="text-2xl text-black mr-32">My Name is</div>
            <input className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
            <div className="text-2xl text-black mr-32">I Study in</div>
            <select className='w-full bg-transparent border-b-[1px] border-black -mt-3 text-[18px] font-semibold focus:outline-none' defaultValue="">
                <option value=""></option>
                <option value="school">school</option>
                <option value="college">college</option>
            </select>
            <div className="text-2xl text-black mr-32">Courses</div>
            <select className='w-full bg-transparent border-b-[1px] border-black -mt-3 text-[18px] font-semibold focus:outline-none' defaultValue="">
                <option value=""></option>
                <option value="school">8th</option>
                <option value="college">9th</option>
                <option value="college">10th</option>
                <option value="college">11th</option>
                <option value="college">12th</option>
            </select>
            <div className="text-2xl text-black mr-32">This is my Email</div>
            <input className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
            <div className="text-2xl text-black mr-32">Set My Password to</div>
            <input className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
            <div className="text-2xl text-black mr-32">My Password is</div>
            <input className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
            <button className="bg-black rounded-lg h-12 text-white">Register</button>    
            <h1 className="text-black/60 text-center text-lg font-sans">Already a member!?
                <span className="cursor-pointer text-black/60 text-lg font-sans">
                    <Link to='/login'> Login</Link>
                </span>
            </h1>       
        </div>

    </div>
  )
}

export default Signup;
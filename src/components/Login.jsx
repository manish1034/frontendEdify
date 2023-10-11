/* eslint-disable no-unused-vars */
import { useState } from "react";
import { login2 } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./LoginContext";

const Login = () => {
    const navigate = useNavigate();
    const { setUserData } = useAuth();
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleLogin = (e) =>{
        setLogin({...login, [e.target.name] : e.target.value});
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = login;
        try {
          const response = await axios.post("http://localhost:8800/auth/login", { email, password });
          const { token, user } = response.data; // Extract token and user data
          setUserData(user);
      
          // Store the token in local storage
          localStorage.setItem("jwt", token);
      
          navigate("/");
        } catch (error) {
          console.log("Unable to login:", error);
        }
      };

    return (
        <div className="relative bg-[rgb(242,241,236)] flex flex-row justify-around rounded-b-3xl">

            {/* Left */}
            <div className="mt-[8%] mr-[8rem]">
                <img src={login2} alt="" className="w- full h-[100vh]"></img>
            </div>
            
            {/* right */}
            <div className="flex flex-col gap-6 mt-[18%] mr-[19%] w-[55vh]">
                <div className="text-5xl font-mono text-black text-center mb-6">Login</div>
                <div className="text-2xl text-black mr-32">This is my Email</div>
                <input type="email" name="email" onChange={handleLogin} value={login.email} className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
                <div className="text-2xl text-black mr-32">This is my Password</div>
                <input type="password" name="password" onChange={handleLogin} value={login.password} className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
                <button onClick={handleSubmit} className="bg-black rounded-lg h-12 text-white">Login</button>    
                <h1 className="text-black/60 text-center text-lg font-sans cursor-pointer hover:underline">Not a member!?
                    <span className="cursor-pointer  text-lg font-sans">
                        <Link to='/signup'> Signup</Link>
                    </span>
                </h1>       
            </div>

        </div>
    )
}

export default Login;
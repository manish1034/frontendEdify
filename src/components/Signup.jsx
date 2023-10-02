/* eslint-disable no-unused-vars */
import { useState } from "react";
import { signup } from "../assets";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();
    const [register, setRegister] = useState({
        username : '',
        fullname : '',
        inWhat : '',
        course : '',
        email : '',
        password : '',
        cPass : ''
    })

    const handleRegister = (e) =>{
        setRegister({...register, [e.target.name]: e.target.value });
    }
    
    const [In,setIn] = useState('')
    const setCoOrSc= (e) => {
        let val = e.target.value;
        setIn(val);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const {username,fullname,inWhat,course,email,password,cPass} = register;
        try {
            const response = await axios.post('/auth/register', {username,fullname,inWhat,course,email,password,cPass});
            navigate('/login');
        } catch (error) {
            console.log("not able to register");
        }
      };
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
                <input name="username" className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
                <div className="text-2xl text-black mr-32">My Name is</div>
                <input name="fullname" className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
                <div className="text-2xl text-black mr-32">I Study in</div>
                <select name="inWhat" onClick={setCoOrSc} value={register.inWhat} onChange={handleRegister} className='w-full bg-transparent border-b-[1px] border-black -mt-3 text-[18px] font-semibold focus:outline-none' defaultValue="">
                    <option value=""></option>
                    <option value="school">school</option>
                    <option value="college">college</option>
                </select>
                <div className="text-2xl text-black mr-32">Courses</div>
                { In === 'school' ? (
                    <select name="course" value={register.course} onChange={handleRegister} className='w-full bg-transparent border-b-[1px] border-black -mt-3 text-[18px] font-semibold focus:outline-none' defaultValue="">
                        <option value=""></option>
                        <option value="6">6th</option>
                        <option value="7">7th</option>
                        <option value="8">8th</option>
                        <option value="9">9th</option>
                        <option value="10">10th</option>
                        <option value="11">11th</option>
                        <option value="12">12th</option>
                    </select>
                ) : (
                    <select name="course" value={register.course} onChange={handleRegister} className='w-full bg-transparent border-b-[1px] border-black -mt-3 text-[18px] font-semibold focus:outline-none' defaultValue="">
                        <option value=""></option>
                        <option value="Btech">B.Tech</option>
                        <option value="BSc">B.Sc</option>
                    </select>
                )}
                <div className="text-2xl text-black mr-32">This is my Email</div>
                <input type="email" name="email" autoComplete="off" value={register.email} onChange={handleRegister} className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
                <div className="text-2xl text-black mr-32">Set My Password to</div>
                <input type="password" name="password" autoComplete="off" value={register.password} onChange={handleRegister} className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
                <div className="text-2xl text-black mr-32">My Password is</div>
                <input type="password" name="cPass" autoComplete="off" value={register.cPass} onChange={handleRegister} className="border-b-[1px] border-black bg-[rgb(242,241,236)] -mt-3 focus:outline-none" ></input>
                <button onClick={handleSubmit} className="bg-black rounded-lg h-12 text-white">Register</button>    
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
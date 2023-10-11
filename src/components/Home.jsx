/* eslint-disable react/no-unescaped-entities */
import CoursesMain from "./CoursesMain";
import { Parallax } from "react-parallax";
import { homepage } from "../assets";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <>
        <Parallax strength={-70} bgImage={homepage} blur={{min:5 , max: -10}} className="h-full mt-[6.8rem]">
          <div className="h-full w-[100vw] text-center text-5xl text-black mb-[7rem] mt-16"> 
              <div className="relative left-[10%]">
                  <h1 className="text-8xl text-center pt-16 text-slate-800">
                    Learning is FUN,<br/> <div className="mt-5 text-6xl text-black/40"> with our digit platform</div>
                  </h1>
                <div className="flex flex-col">
                  <div className="text-3xl mt-12 px-16 text-black/60">
                    we provide everything in a single place so that <br/> you
                    don’t have to waste your time
                    searching for it
                  </div>
                </div>
                <button className='h-14 w-[15rem] rounded-lg bg-slate-800 text-white text-center mt-12 text-2xl hover:bg-slate-500'> <Link to='/Signup'> Sign up </Link> </button>
            </div>
              </div>
        </Parallax>
        <CoursesMain/>
    </>
  )
}
export default Home;
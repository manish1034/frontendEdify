import { Parallax } from "react-parallax";
import { paraImg } from "../assets"; 

const Newsletter = () => {
  return (
    <Parallax strength={300} bgImage={paraImg} blur={{min:-5 , max: 25}}>
        <div className="text-center text-5xl text-white/80 mb-16 mt-16 z-50">
            Join our Guide Tour
        </div>
        <div className="flex flex-col items-center gap-0">
            <div className="flex h-[200px] w-full justify-center gap-3">
                <input className="h-10 w-[300px] bg-transparent rounded-[0.75rem] border-[0.5px] p-4 text-white/40" placeholder="Firstname"></input>
                <input className="h-10 w-[300px] bg-transparent rounded-[0.75rem] border-[0.5px] p-4 text-white/40" placeholder="Lastname"></input>
            </div>
            <div className="flex flex-col bottom-[4.9rem] -mt-[8rem] gap-3 mb-14">
                <input className="h-10 w-[615px] bg-transparent rounded-[0.75rem] border-[0.5px] p-4 text-white/40" placeholder="Email"></input>
                <button className="h-10 w-[615px] bg-white/80  rounded-[0.75rem] border-[0.5px] hover:bg-white/40 hover:text-white/90">Submit</button>
            </div>
        </div>
    </Parallax>
  )
}

export default Newsletter;
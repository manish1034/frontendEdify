import ProNavbar from "./ProNavbar";
import { AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

const EditProfile = () => {
  return (
    <div className="min-h-[calc(100vh)]">
        <ProNavbar/>
        {/* left */}
        <div className="relative left-[16%] -mt-[22rem] h-[88vh] w-[26vw]  border-r-[0.1px] border-r-black/60">
          <div className="flex flex-col gap-2 bg-white mt-4 ml-12">
            <div className="h-[15rem] w-[15rem] bg-purple-800 rounded-full"></div>
            <div className="text-3xl">Amit Rawat</div>
            <div className="text-2xl text-black/50">Rookie0208 • he/him</div>
            <div className="text-xl text-black/80">A junior software engineer (student) with good catch in C++ and Web Development.</div>
            <div className="text-md text-black/70">amitsr26@gmail.com</div>
            <div className="text-md text-black/70">+918750273613</div>
          </div>
        </div>
        {/* right */}
        <div className="relative left-[45%] h-full w-[27vw] -mt-[38rem] bg-white border-r-[2px] border-black/20 pr-6">
          <div className="flex flex-col justify-start gap-[0.6rem] mb-5">
            <h1 className="text-2xl">Personal Info</h1>
            <label>Name</label>
            <input className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="Amit Rawat"/>
            <label>Username</label>
            <input className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="amitsr26"/>
            <label>Pronoun</label>
            <select className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" defaultValue="">
              <option value=""></option>
              <option value="He/They">He/they</option>
              <option value="She/Her">She/her</option>
            </select>
            <label>Bio</label>
            <textarea className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="A junior software engineer (student) with good catch in C++ and Web Development." rows='4'/>
            <label>Email</label>
            <input className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="amitsr26@gmail.com"/>
            <label>Phone no.</label>
            <input className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="+918750273613"/>
            <div className="text-2xl">Social Accounts</div>
            <label><AiFillInstagram className="text-xl mb-2"/></label>
            <input className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="https://www.instagram.com/"/>
            <label><AiFillTwitterCircle className="text-xl mb-2"/></label>
            <input className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="https://www.twitter.com/"/>
            <label><AiFillLinkedin className="text-xl mb-2"/></label>
            <input className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg mb-4" placeholder="https://www.linkedin.com/"/>
            <button className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg text-center bg-black/90 text-white/80 hover:bg-white/70 hover:text-black/60">Save</button>
            <button className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg text-center bg-black/90 text-white/80 hover:bg-white/70 hover:text-black/90 hover:font-semibold">Cancel</button>
          </div>
        </div>
        {/* extremeRight */}
        <div className="relative left-[75%] h-[100%] w-[20rem] -mt-[55rem]">
          <div className="flex flex-col justify-start gap-4">
            <h1 className="text-2xl">Basic Details</h1>
            <div className="flex gap-5 cursor-pointer">
              <div className="text-center h-[8rem] w-[8rem] bg-[rgb(242,241,236)] rounded-xl pt-11"><h1 className="text-lg">School</h1></div>
              <div className="text-center h-[8rem] w-[8rem] bg-[rgb(242,241,236)] rounded-xl pt-11"><h1 className="text-lg">College</h1></div>
            </div>
            <label className="text-xl">Institute Name</label>
            <input className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg w-[20vw]" placeholder=""/>
            <label className="text-xl">Qualification</label>
            <select className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg w-[20vw]" placeholder="">
              <option value=""></option>
              <option value="Bsc">B.Sc</option>
              <option value="Btech">B.Tech</option>
            </select>
            <label className="text-xl">Year of Passing</label>
            <input className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg w-[20vw]" placeholder=""/>
            <button className="border-[1px] pl-2 -mt-2 pt-1 pb-1 w-[10vw] rounded-lg text-center bg-black/90 text-white/80 hover:bg-white/70 hover:text-black/60">Save</button>
            <button className="border-[1px] pl-2 -mt-2 pt-1 pb-1 w-[12vw] rounded-lg text-center bg-black/90 text-white/80 hover:bg-white/70 hover:text-black/90 hover:font-semibold">Cancel</button>
            <div className="text-center h-[24rem] w-[8rem] bg-white rounded-xl pt-11"></div>

            
          </div>
        </div>
    </div>
  )
}

export default EditProfile;
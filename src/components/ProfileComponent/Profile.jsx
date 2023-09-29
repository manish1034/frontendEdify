import ProNavbar from "./ProNavbar";

const Profile = () => {
  return (
    <>
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
        <div className="relative left-[45%] -mt-[38rem] bg-white h-[100%] w-[54vw] mb-10">
          <div className="flex flex-col gap-4 mt-3">
            <div className="text-3xl">Achievements</div>
            {/* circles */}
            <div className="flex flex-row justify-start gap-12 mb-4">
              <div className="h-20 w-20 rounded-full bg-purple-800"></div>
              <div className="h-20 w-20 rounded-full bg-purple-800"></div>
              <div className="h-20 w-20 rounded-full bg-purple-800"></div>
              <div className="h-20 w-20 rounded-full bg-purple-800"></div>
            </div>
            {/* tracks */}
            <div className="flex flex-row gap-2 justify-start">
              <div className="h-[8rem] w-[15rem] bg-[rgb(242,241,236)] rounded-xl text-start pl-7 pt-4 flex flex-col gap-2">
                <h1 className="text-xl">Weekly Rank</h1>
                <h1 className="text-4xl">1st</h1>
              </div>
              <div className="h-[8rem] w-[15rem] bg-[rgb(242,241,236)] rounded-xl text-start pl-7 pt-4 flex flex-col gap-2">
                <h1 className="text-xl">Total Quiz Attempted</h1>
                <h1 className="text-4xl">32</h1>
              </div>
              <div className="h-[8rem] w-[15rem] bg-[rgb(242,241,236)] rounded-xl text-start pl-7 pt-4 flex flex-col gap-2">
                <h1 className="text-xl">Total ex earned</h1>
                <h1 className="text-4xl">1200+</h1>
              </div>
            </div>
            <div className="text-3xl mt-4">Ongoing Courses</div>
            {/* ongoing */}
            <div className="flex flex-row justify-start gap-2">
              <div className="h-[10.5rem] w-[10rem] bg-purple-800 rounded-xl"></div>
              <div className="h-[10.5rem] w-[10rem] bg-purple-800 rounded-xl"></div>
              <div className="h-[10.5rem] w-[10rem] bg-purple-800 rounded-xl"></div>
              <div className="h-[10.5rem] w-[10rem] bg-purple-800 rounded-xl"></div>
            </div>
            <div className="text-3xl mt-4">Completed Courses</div>
            <div className="flex flex-row justify-start gap-2">
              <div className="h-[10.5rem] w-[10rem] bg-purple-800 rounded-xl"></div>
              <div className="h-[10.5rem] w-[10rem] bg-purple-800 rounded-xl"></div>
              <div className="h-[10.5rem] w-[10rem] bg-purple-800 rounded-xl"></div>
              <div className="h-[10.5rem] w-[10rem] bg-purple-800 rounded-xl"></div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Profile;
import { Link } from "react-router-dom";

const ProNavbar = () => {
  return (
    <div className="sticky top-[20%] ml-3 mb-52">
        <div className="h-[41vh] w-[15%] bg-inherit border-r-[0.1px] border-black/60">
            <div className="flex flex-col items-start ml-7">
                <div className="hover:border-y-[0.1px] hover:border-black/70 w-[90%] p-4 cursor-pointer">
                    <Link to='/profile'>Profile</Link>
                </div>
                <div className="hover:border-y-[0.1px] hover:border-black/70 w-[90%] p-4 cursor-pointer">
                    <Link to='/leaderboard'>LeaderBoard</Link>
                </div>
                <div className="hover:border-y-[0.1px] hover:border-black/70 w-[90%] p-4 cursor-pointer">
                    <Link to='/editprofile'>Edit Profile</Link>
                </div>
                <div className="hover:border-y-[0.1px] hover:border-black/70 w-[90%] p-4 cursor-pointer">
                    <Link to='/settings'>Account Settings</Link>
                </div>
                <div className="hover:border-y-[0.1px] hover:border-black/70 w-[90%] p-4 cursor-pointer">
                    <Link to='/login'>Logout</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProNavbar;
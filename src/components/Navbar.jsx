import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed z-50 h-[16vh] w-full top-0 bg-white flex flex-col justify-around pt-3 hover:bg-black hover:text-white transition-all hover:scale-100">
        {/* upper */}
        <div className="flex flex-row justify-center mt-2 border-b-[0.5px] hover:border-b-white">
            <div className="text-2xl ml-10 transition-all hover:scale-100"><Link to='/'>Edify</Link></div>
            <div className="flex justify-end gap-[2.4rem] ml-[56%] mt-[0.47rem]">
                <h2 className="text-md font-light cursor-pointer transition-all hover:scale-90 ml-32">
                    <Link to="/login">Login</Link>
                </h2>
                <h2 className="text-md font-light cursor-pointer transition-all hover:scale-90">
                    <Link to="/signup">Signup</Link>
                </h2>
                <h2 className="text-md font-light cursor-pointer transition-all hover:scale-90">
                    <Link to='/profile'>Profile</Link>
                </h2>
            </div>
        </div>
        {/* down */}
        <div className="border-t-[0.5px] border-t-black flex flex-row justify-center gap-[2.5rem] pb-3 pt-5">
            <div className="text-md cursor-pointer transition-all hover:scale-105 -ml-10">
                <Link to='/about'>About us</Link>
            </div>
            <div className="text-md cursor-pointer transition-all hover:scale-105">
                <Link to='/courses'>Courses</Link>
            </div>
            <div className="text-md cursor-pointer transition-all hover:scale-105">
                <Link to='/studymaterial'>Study Material</Link>
            </div>
            <div className="text-md cursor-pointer transition-all hover:scale-105">
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
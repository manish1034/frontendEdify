
const Footer = () => {
  return (
    <div className="">
    {/* top */}
        <div className="flex flex-row justify-around h-[16rem] w-full">
            <div className="mt-20 mr-32">
                <h1 className="text-4xl">Edify</h1>
                <h1 className="text-xl mt-2">Unlocking Knowledge, Empowering Minds</h1>
            </div>
            <div className="flex gap-[7rem] mt-6 mr-6">
                <div className="text-md font-semibold">
                    <h1 className="text-md font-semibold">Company</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">About us</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">Contact us</h1>
                </div>
                <div className="text-md font-semibold">
                    <h1 className="text-md font-semibold">Courses</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">Class 12th</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">Class 11th</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">Class 10th</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">Class 9th</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">Class 8th</h1>

                </div>
                <div className="text-md font-semibold">
                    <h1 className="text-md font-semibold">NCERT</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">Maths</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">Physics</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">Biology</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">Chemistry</h1>
                    <h1 className="text-md font-light cursor-pointer transition-all hover:scale-110">Data Structures</h1>

                </div>
            </div>
        </div>
    {/* bottom */}
        <div className="flex flex-row justify-around bg-black h-24 w-full rounded-t-2xl items-center">
            <h2 className="text-md text-white">©️ 2023 copyright</h2>
            <h2 className="text-md text-white">All right reserved | Terms and Condition</h2>
        </div>
    </div>
    
  )
}

export default Footer;
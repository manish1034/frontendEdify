import { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

const Courses = () => {
  const [course, setCourse] = useState(false);
  const [subCourse, setSubCourse] = useState(false);
  const [subHead, SetSubHead] = useState(false);

  useEffect(() => {
    setCourse(true);
    console.log("all courses")
  }, []);

  const handleChange = () => {
    SetSubHead(true);
    setCourse(false);
    if(subCourse === true){
        setSubCourse(false);
    }
    setSubCourse(true);
  };

  return (
    
    <Box sx={{ height: 480 }}>
        <div className="relative mt-32">
            
            {/* top */}
            <div className="flex flex-col gap-4 mb-5">
                <h2 className="text-[2.5rem] font-sans ml-20">Explore Our Courses</h2>
                <div className="h-[3rem] w-[88%] ml-20 bg-[rgb(249,249,245)] rounded-lg flex flex-row justify-center gap-36">
                    <div className="flex flex-row justify-around bg-white h-[2.5rem] w-[6rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer"
                        onClick= {handleChange}
                        >
                        <h1 className="text-sm">8-10</h1>
                    </div>
                    <div className="flex flex-row justify-around bg-white h-[2.5rem] w-[6rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer"
                        onClick= {handleChange}
                        >
                        <h1 className="text-sm">11-12</h1>
                    </div>
                    <div className="flex flex-row justify-around bg-white h-[2.5rem] w-[6rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer"
                        onClick= {handleChange}
                        >
                        <h1 className="text-sm">University</h1>
                    </div>
                </div>
                {subHead ? <div className="h-[3rem] w-[88%] ml-20 rounded-lg flex flex-row justify-start gap-36">
                    <div className="flex flex-row justify-around bg-black/5 h-[2.2rem] w-[5rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer"
                        onClick= {handleChange}
                        >
                        <h1 className="text-sm">Class 8th</h1>
                    </div>
                </div>:""}
            </div>
            
            
            {/* bottom */}
            {course ? <Box sx={{ display: 'flex', marginLeft: '4rem' }}>
                <Tilt options={{scale: 1}}>
                <Zoom in={course}>
                    <div className='h-[13rem] w-[15rem] bg-purple-600 ml-4 rounded-2xl'>
                        <div className='h-12 w-12 absolute rounded-full bg-emerald-200 bottom-2 ml-[11rem] text-center text-xs p-2 cursor-pointer'> click me</div>
                    </div>
                </Zoom></Tilt>
                <Tilt options={{scale: 1}}>
                <Zoom in={course} style={{ transitionDelay: course ? '500ms' : '0ms' }}>
                    <div className='h-[13rem] w-[15rem] bg-purple-600 ml-4 rounded-2xl'>
                        <div className='h-12 w-12 absolute rounded-full bg-emerald-200 bottom-2 ml-[11rem] text-center text-xs p-2 cursor-pointer'> click me</div>
                    </div>
                </Zoom></Tilt>
            </Box> :
            <Box sx={{ display: 'flex', marginLeft: '4rem' }}>
                <Zoom in={subCourse}>
                    <div className='h-[13rem] w-[15rem] bg-purple-200 ml-4 rounded-2xl'>
                        <div className='h-12 w-12 absolute rounded-full bg-emerald-200 bottom-2 ml-[11rem] text-center text-xs p-2 cursor-pointer'> click me</div>
                    </div>
                </Zoom>
                <Zoom in={subCourse} style={{ transitionDelay: course ? '500ms' : '0ms' }}>
                    <div className='h-[13rem] w-[15rem] bg-purple-200 ml-4 rounded-2xl'>
                        <div className='h-12 w-12 absolute rounded-full bg-emerald-200 bottom-2 ml-[11rem] text-center text-xs p-2 cursor-pointer'> click me</div>
                    </div>
                </Zoom>
            </Box> }
        </div>
    </Box>
  );
}


export default Courses;
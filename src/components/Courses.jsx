import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import axios from "axios";
import ClassSection from "./ClassSection";

const Courses = () => {
  const [course, setCourse] = useState(false);
  const [school, setSchool] = useState([]);
  const [college, setCollege] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  const getSchoolData = () => {
    axios
      .get("http://localhost:8800/api/getschool")
      .then((response) => {
        const clams = response.data.flatMap((item) =>
          item.subjects.map((subject) => subject.subjectname)
        );
        setSchool([...new Set(clams)]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getCollegeData = () => {
    axios
      .get("http://localhost:8800/api/getcollege")
      .then((response) => {
        const clams = response.data.flatMap((item) =>
          item.subjects.map((subject) => subject.name)
        );
        console.log(clams);
        setCollege([...new Set(clams)]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    setCourse(true);
    getSchoolData();
    getCollegeData();
  }, [course]);

  useEffect(() => {
    setAllCourses([...school, ...college]);
  }, [school, college]);

  return (
    <Box sx={{ height: 480 }}>
      <div className="relative mt-32 flex flex-col justify-center">
        <ClassSection />
        {allCourses ? (
            <div  className=" flex flex-row mx-[4rem] overflow-x-auto overflow-y-hidden whitespace-nowrap">
                {allCourses.map((item,index) => (
                    <Tilt key={index} options={{ scale: 1 }}>
                    <Zoom in={course}>
                        <div className="h-[13rem] w-[15rem] bg-[rgb(40,59,102)] ml-4 rounded-2xl cursor-pointer shadow-lg shadow-slate-500">
                            <div className="text-center overflow-hidden p-5 pt-20 text-white/80 text-lg">{item}</div>
                        </div>
                    </Zoom>
                    </Tilt>
                ))}
            </div>
        ) : (
          ""
        )}
      </div>
    </Box>
  );
};

export default Courses;
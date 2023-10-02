import { useEffect, useState } from "react";
// import { Tilt } from "react-tilt";
// import Box from "@mui/material/Box";
// import Zoom from "@mui/material/Zoom";
import axios from "axios";
import { Link } from "react-router-dom";

const ClassSecComp = () => {
  const [subHead6, SetSubHead6] = useState(false);
  const [subHead9, SetSubHead9] = useState(false);
  const [subHead11, SetSubHead11] = useState(false);
  const [subUniversity, SetSubUniversity] = useState(false);
  const [school, setSchool] = useState([]);
  const [college, setCollege] = useState([]);
  const [allClasses, setAllClasses] = useState([]);

  function filterNumbersByRange(numbers, min, max) {
    return numbers.filter(number => number >= min && number <= max);
  }

  const getSchoolData = () => {
    axios
      .get("http://localhost:8800/api/getschool")
      .then((response) => {
        const clams = response.data.flatMap((item) =>
          item.classname
        );
        
        setSchool([...clams]);
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
          item.coursename
        );
        setCollege([...clams]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getSchoolData();
    getCollegeData();
  }, []);

  useEffect(() => {
    setAllClasses([...school, ...college]);
  }, [school, college]);

  const handleChange1 = () => {
    SetSubHead6(true);
    SetSubHead9(false);
    SetSubHead11(false);
    SetSubUniversity(false);
  };
  const handleChange2 = () => {
    SetSubHead6(false);
    SetSubHead9(true);
    SetSubHead11(false);
    SetSubUniversity(false);
  };
  const handleChange3 = () => {
    SetSubHead6(false);
    SetSubHead9(false);
    SetSubHead11(true);
    SetSubUniversity(false);
  };
  const handleChange4 = () => {
    SetSubHead6(false);
    SetSubHead9(false);
    SetSubHead11(false);
    SetSubUniversity(true);
  };

  const range68 = filterNumbersByRange(allClasses, 6, 8);
  const range910 = filterNumbersByRange(allClasses, 9, 10);
  const range1112 = filterNumbersByRange(allClasses, 11, 12);
  const btechBsc = allClasses.filter(item => item === "Btech" || item === "Bsc");

  return (
        <div className="flex flex-col gap-4 mb-5">
          <h2 className="text-[2.5rem] font-sans ml-20">Explore Our Courses</h2>
          <div className="h-[3rem] w-[88%] ml-20 bg-[rgb(249,249,245)] rounded-lg flex flex-row justify-center gap-36">
            <div
              className="flex flex-row justify-around bg-white h-[2.5rem] w-[6rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer"
              onClick={handleChange1}
            >
              <h1 className="text-sm">6-8</h1>
            </div>
            <div
              className="flex flex-row justify-around bg-white h-[2.5rem] w-[6rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer"
              onClick={handleChange2}
            >
              <h1 className="text-sm">9-10</h1>
            </div>
            <div
              className="flex flex-row justify-around bg-white h-[2.5rem] w-[6rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer"
              onClick={handleChange3}
            >
              <h1 className="text-sm">11-12</h1>
            </div>
            <div
              className="flex flex-row justify-around bg-white h-[2.5rem] w-[6rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer"
              onClick={handleChange4}
            >
              <h1 className="text-sm">University</h1>
            </div>
          </div>
          {subHead6 ? (
            <div className="h-[3rem] w-[88%] ml-20 rounded-lg flex flex-row justify-start gap-36">
            {range68.map((item,index) =>(
              <div key={index} className="flex flex-row justify-around bg-black/5 h-[2.2rem] w-[5rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer">
                <h1 className="text-sm"><Link to={`/school/${item}`}>{item}</Link></h1>
              </div>
          ))}
            </div>
          ) : (
            ""
          )}
          {subHead9 ? (
            <div className="h-[3rem] w-[88%] ml-20 rounded-lg flex flex-row justify-start gap-36">
            {range910.map((item,index) =>(
              <div key={index} className="flex flex-row justify-around bg-black/5 h-[2.2rem] w-[5rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer">
                <h1 className="text-sm"><Link to={`/school/${item}`}>{item}</Link></h1>
              </div>
          ))}
            </div>
          ) : (
            ""
          )}
          {subHead11 ? (
            <div className="h-[3rem] w-[88%] ml-20 rounded-lg flex flex-row justify-start gap-36">
            {range1112.map((item,index) =>(
              <div key={index} className="flex flex-row justify-around bg-black/5 h-[2.2rem] w-[5rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer">
                <h1 className="text-sm"><Link to={`/school/${item}`}>{item}</Link></h1>
              </div>
          ))}
            </div>
          ) : (
            ""
          )}
          {subUniversity ? (
            <div className="h-[3rem] w-[88%] ml-20 rounded-lg flex flex-row justify-start gap-36">
              {btechBsc.map((item,index) =>(
              <div key={index} className="flex flex-row justify-around bg-black/5 h-[2.2rem] w-[5rem] rounded-xl items-center mt-1 hover:bg-black/10 cursor-pointer">
                <h1 className="text-sm"><Link to={`/college/${item}`}>{item}</Link></h1>
              </div>
          ))}
            </div>
          ) : (
            ""
          )}
        </div>
  );
};

export default ClassSecComp;
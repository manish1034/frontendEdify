/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { TextField } from "@mui/material/";
import axios from "axios";

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "cursor-default" : "cursor-pointer"}>
      <div className="accordion-header" onClick={toggleAccordion}>
        {props.title}
      </div>
      {isOpen && <div className="accordion-content">{props.children}</div>}
    </div>
  );
}

const ViewCourse = () => {
  const { class: schoolClass, course: collegeCourse } = useParams();
  const [school, setSchool] = useState([]);
  const [college, setCollege] = useState([]);
  const getSchoolData = () => {
    axios
      .get("http://localhost:8800/api/getschool")
      .then((response) => {
        const classData = response.data.filter(
          (item) => item.classname === schoolClass
        );
        setSchool(classData ? [classData] : []);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getCollegeData = () => {
    axios
      .get("http://localhost:8800/api/getcollege")
      .then((response) => {
        const courseData = response.data.filter(
          (item) => item.coursename === collegeCourse
        );
        setCollege(courseData ? [courseData] : []);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getSchoolData();
    getCollegeData();
  }, [schoolClass, collegeCourse]);

  // console.log(
  //   college.map((item) =>
  //     item[0].subjects.map((item) => item.videos.map((item) => item))
  //   )
  // );
//   const SchoolCourse = () => {
//     return (
//       <div>
//         <div className=" relative my-20 flex flex-col justify-center">
//           <h1 className=" text-[20px] font-semibold font-mono">
//             it is our pleasure to work with you and make your school journey fun
//             and memorable
//           </h1>
//         </div>
//         <div>
//           <span className=" text-[20px] font-mono">
//             here are the courses according to your needs
//           </span>
//         </div>
//         <div className=" flex flex-wrap relative w-full">
//           {school.length > 0 ? (
//             school.map((item) =>
//               item[0].subjects.map((item, index) => (
//                 <div
//                   key={index}
//                   className=" flex-[3.5] bg-gray-500 mx-3 rounded-[2px] py-3 px-5 cursor-pointer "
//                 >
//                   <div>{item.subjectname}</div>
//                 </div>
//               ))
//             )
//           ) : (
//             <p>...</p>
//           )}
//         </div>
//         <div className=" flex flex-row justify-between items-center">
//           <div className="bg-gray-500 mx-3 my-2 rounded-[2px] py-3 px-5 cursor-pointer ">
//             Notes
//           </div>
//           <div className="bg-gray-500 mx-3 my-2 rounded-[2px] py-3 px-5 cursor-pointer ">
//             Take Tests
//           </div>
//         </div>
//       </div>
//     );
//   };

  
  const SchoolCourse = () => {
    return (
      <div>
        {/* <div className=" relative my-40 flex flex-col justify-center">
          <h1 className=" text-[20px] font-semibold font-mono">
            it is our pleasure to work with you and make your college journey
            fun and memorable
          </h1>
        </div> */}
        <div className="relative mt-[12%]">
          <span className="font-mono text-start ml-20 text-5xl">
            Let's take one step forward towards... <br/> 
          </span>
          <div className="ml-20 p-3 italic mb-10 mt-2 font-mono text-6xl text-[rgb(46,81,167)]">LEARNING!!</div>
        </div>
        <div className=" flex flex-col relative w-[90%] left-16 mb-8">
          {school.length > 0 ? (
            school.map((item) =>
              item[0].subjects.map((item, index) => (
                <div
                  key={index}
                  className="flex-[5] bg-[rgb(249,249,245)] mx-3 my-2 p-5 text-black/80 text-xl rounded-sm"
                >
                    <Accordion title={item.subjectname}>
                        {item.videos.map((item, index) => (
                        <div
                            key={index}
                            className="flex bg-white m-2 my-6 p-2 rounded-2xl cursor-pointer text-blue-600"
                        >
                            {/* Left-VideoSection */}
                            <div className="p-4 mr-[5rem] ml-10 rounded-md mb-5 mt-4">
                                <iframe className="m-0 rounded-lg shadow-black shadow-md"
                                    width="590"
                                    height="355"
                                    src={`https://www.youtube.com/embed/${item.videos}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            {/* right-NoteSection */}
                            <div className="relative right-0 mb-5 mt-3">
                                <div className="border-b-[2px] border-r-[2px] border-grey shadow-xl">
                                    <TextField
                                    id="standard-multiline-static"
                                    label="FOR NOTES"
                                    InputLabelProps={{sx:{color: "blue-500"}}}
                                    multiline
                                    rows={14}
                                    sx={{width: 450, height: 390, marginLeft: 1}}
                                    placeholder="Write your own notes...HERE"
                                    variant="standard"
                                    />
                                </div>
                                <div className="relative left-[15.7rem] bg-black/80 text-white h-[3rem] w-[10rem] cursor-pointer mt-[2.7rem] rounded-md hover:bg-white border-b-[2px] border-r-[2px] shadow-md shadow-grey">
                                    <h2 className="text-white font-sans p-[0.6rem] pl-9 hover:text-black/90">Save as Pdf</h2>
                                </div>
                            </div>
                        </div>
                        ))}
                        <div className=" flex flex-row justify-between items-center">
                        <div className="bg-white m-2 px-4 py-2 text-lg rounded-lg cursor-pointer text-black/80 font-sans font-normal hover:bg-black/80 hover:text-white/80">
                            Notes
                        </div>
                        <div className="bg-white mr-2 px-4 py-2 text-lg rounded-lg cursor-pointer text-black/80 font-sans font-normal hover:bg-black/80 hover:text-white/80">
                            Take Tests
                        </div>
                        </div>
                    </Accordion>
                </div>
              ))
            )
          ) : (
            <p>...</p>
          )}
        </div>
      </div>
    );
  };


  const CollegeCourse = () => {
    return (
      <div>
        {/* <div className=" relative my-40 flex flex-col justify-center">
          <h1 className=" text-[20px] font-semibold font-mono">
            it is our pleasure to work with you and make your college journey
            fun and memorable
          </h1>
        </div> */}
        <div className="relative mt-[12%]">
          <span className="font-mono text-start ml-20 text-5xl">
            Let's take one step forward towards... <br/> 
          </span>
          <div className="ml-20 p-3 italic mb-10 mt-2 font-mono text-6xl text-[rgb(46,81,167)]">LEARNING!!</div>
        </div>
        <div className=" flex flex-col relative w-[90%] left-16 mb-8">
          {college.length > 0 ? (
            college.map((item) =>
              item[0].subjects.map((item, index) => (
                <div
                  key={index}
                  className="flex-[5] bg-[rgb(249,249,245)] mx-3 my-2 p-5 text-black/80 text-xl rounded-sm"
                >
                    <Accordion title={item.name}>
                        {item.videos.map((item, index) => (
                        <div
                            key={index}
                            className="flex bg-white m-2 my-6 p-2 rounded-2xl cursor-pointer text-blue-600"
                        >
                            {/* Left-VideoSection */}
                            <div className="p-4 mr-[5rem] ml-10 rounded-md mb-5 mt-4">
                                <iframe className="m-0 rounded-lg shadow-black shadow-md"
                                    width="590"
                                    height="355"
                                    src={`https://www.youtube.com/embed/${item.videos}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                {/* <div className="flex flex-row">
                                    <div className="bg-white h-[3.7rem] w-[10rem] cursor-pointer mt-10 rounded-md hover:bg-[rgb(92,84,241)] border-b-[2px] border-r-[2px] shadow-md shadow-grey">
                                    <h2 className="text-[rgb(92,84,241)] font-sans font-semibold p-[1rem] pl-9 hover:text-white"><a href="https://www.toppersnotes.com/wp-content/uploads/2017/02/P.pdf" target="_blank">For Notes</a></h2>
                                    </div>
                                    <div className="bg-white relative left-[12rem] h-[3.7rem] w-[10rem] cursor-pointer mt-10 ml-4 rounded-md hover:bg-[rgb(92,84,241)] border-b-[2px] border-r-[2px] shadow-md shadow-grey">
                                    <h2 className="text-[rgb(92,84,241)] font-sans font-semibold p-[1rem] pl-9 hover:text-white"><a href="https://forms.gle/NBE6CRAHGCWYax6d6" target="_blank">Quick Quiz</a></h2>
                                    </div>
                                </div> */}
                            </div>
                            {/* right-NoteSection */}
                            <div className="relative right-0 mb-5 mt-3">
                                <div className="border-b-[2px] border-r-[2px] border-grey shadow-xl">
                                    <TextField
                                    id="standard-multiline-static"
                                    label="FOR NOTES"
                                    InputLabelProps={{sx:{color: "blue-500"}}}
                                    multiline
                                    rows={14}
                                    sx={{width: 450, height: 390, marginLeft: 1}}
                                    placeholder="Write your own notes...HERE"
                                    variant="standard"
                                    />
                                </div>
                                <div className="relative left-[15.7rem] bg-black/80 text-white h-[3rem] w-[10rem] cursor-pointer mt-[2.7rem] rounded-md hover:bg-white border-b-[2px] border-r-[2px] shadow-md shadow-grey">
                                    <h2 className="text-white font-sans p-[0.6rem] pl-9 hover:text-black/90">Save as Pdf</h2>
                                </div>
                            </div>
                        </div>
                        ))}
                        <div className=" flex flex-row justify-between items-center">
                        <div className="bg-white m-2 px-4 py-2 text-lg rounded-lg cursor-pointer text-black/80 font-sans font-normal hover:bg-black/80 hover:text-white/80">
                            Notes
                        </div>
                        <div className="bg-white mr-2 px-4 py-2 text-lg rounded-lg cursor-pointer text-black/80 font-sans font-normal hover:bg-black/80 hover:text-white/80">
                            Take Tests
                        </div>
                        </div>
                    </Accordion>
                </div>
              ))
            )
          ) : (
            <p>...</p>
          )}
        </div>
      </div>
    );
  };
  return (
    <div>
      {schoolClass ? <SchoolCourse /> : ""}
      {collegeCourse ? <CollegeCourse /> : ""}
    </div>
  );
};

export default ViewCourse;
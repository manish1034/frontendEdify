/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
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
  const SchoolCourse = () => {
    return (
      <div>
        <div className=" relative my-20 flex flex-col justify-center">
          <h1 className=" text-[20px] font-semibold font-mono">
            it is our pleasure to work with you and make your school journey fun
            and memorable
          </h1>
        </div>
        <div>
          <span className=" text-[20px] font-mono">
            here are the courses according to your needs
          </span>
        </div>
        <div className=" flex flex-wrap relative w-full">
          {school.length > 0 ? (
            school.map((item) =>
              item[0].subjects.map((item, index) => (
                <div
                  key={index}
                  className=" flex-[3.5] bg-gray-500 mx-3 rounded-[2px] py-3 px-5 cursor-pointer "
                >
                  <div>{item.subjectname}</div>
                </div>
              ))
            )
          ) : (
            <p>...</p>
          )}
        </div>
        <div className=" flex flex-row justify-between items-center">
          <div className="bg-gray-500 mx-3 my-2 rounded-[2px] py-3 px-5 cursor-pointer ">
            Notes
          </div>
          <div className="bg-gray-500 mx-3 my-2 rounded-[2px] py-3 px-5 cursor-pointer ">
            Take Tests
          </div>
        </div>
      </div>
    );
  };

  
  const CollegeCourse = () => {
    return (
      <div>
        <div className=" relative my-20 flex flex-col justify-center">
          <h1 className=" text-[20px] font-semibold font-mono">
            it is our pleasure to work with you and make your college journey
            fun and memorable
          </h1>
        </div>
        <div>
          <span className=" text-[20px] font-mono">
            here are the courses according to your needs
          </span>
        </div>
        <div className=" flex flex-col relative w-full">
          {college.length > 0 ? (
            college.map((item) =>
              item[0].subjects.map((item, index) => (
                <div
                  key={index}
                  className=" flex-[5] bg-gray-500 mx-3 my-2 rounded-[2px] py-3 px-5 "
                >
                  <Accordion title={item.name}>
                    {item.videos.map((item, index) => (
                      <div
                        key={index}
                        className=" bg-white m-2 p-2 rounded-[2px] cursor-pointer"
                      >
                        <a href={item.url}>
                          <Accordion title={item.title}></Accordion>
                        </a>
                      </div>
                    ))}
                    <div className=" flex flex-row justify-between items-center">
                      <div className="bg-white m-2 p-2 rounded-[2px] cursor-pointer">
                        Notes
                      </div>
                      <div className="bg-white m-2 p-2 rounded-[2px] cursor-pointer ">
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
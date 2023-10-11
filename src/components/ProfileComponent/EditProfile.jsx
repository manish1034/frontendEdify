import {useEffect} from "react";
import ProNavbar from "./ProNavbar";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { useAuth } from "../LoginContext";
import { useState } from "react";
import axios from "axios";


const EditProfile = () => {
  const { userData, setUserData } = useAuth();

  const [inWhat, setInWhat] = useState(userData ? userData.inWhat : "");
  const [editData, setEditData] = useState({});

  useEffect(() => {
    // Initialize editData with userData when userData changes
    if (userData) {
      setEditData({
        profilePicture: userData.profilePicture || "",
        fullname: userData.fullname || "",
        username: userData.username || "",
        age: userData.age || 0,
        pronoun: userData.pronoun || "",
        bio: userData.bio || "",
        email: userData.email || "",
        inWhat: userData.inWhat || "",
        collegestudent: userData.collegestudent || "",
        schoolstudent: userData.schoolstudent || "",
        institute: userData.institute || "",
        passingyear: userData.passingyear || "",
        contact: userData.contact || "",
        socialacc: {
          instagram: userData.socialacc?.instagram || "",
          twitter: userData.socialacc?.twitter || "",
          linkedin: userData.socialacc?.linkedin || "",
        },
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setEditData((prevEditData) => {
      const updatedEditData = { ...prevEditData };
  
      if (name.startsWith("socialacc.")) {
        const socialaccProperty = name.split(".")[1];
        updatedEditData.socialacc[socialaccProperty] = value;
      } else {
        updatedEditData[name] = value;
      }
  
      return updatedEditData;
    });
  };
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setEditData({ ...editData, profilePicture: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8800/update/${userData._id}`,
        {
          ...userData,
          ...editData,
        }
      );
      const { token, user } = response.data;
      setUserData(user);
      localStorage.setItem("jwt", token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full mb-10">
        <ProNavbar/>
        {/* left */}
        <div className="relative left-[16%] -mt-[22rem] h-[88vh] w-[26vw]  border-r-[0.1px] border-r-black/60">
          <div className="flex flex-col gap-2 bg-white mt-4 ml-12">
            <div className="h-[15rem] w-[15rem] bg-purple-800 rounded-full"></div>
            <div className="text-3xl font-serif">{userData.fullname}</div>
            <div className="text-2xl text-black/50">{userData.username} • {userData.pronoun}</div>
            <div className="text-xl text-black/80">{userData.bio}</div>
            <div className="text-md text-black/70">{userData.email}</div>
            <div className="text-md text-black/70">{userData.contact}</div>
          </div>
        </div>
        {/* right */}
        <div className="relative left-[45%] h-full w-[27vw] -mt-[38rem] bg-white border-r-[2px] border-black/20 pr-6">
          <div className="flex flex-col justify-start gap-[0.6rem]">
            <h1 className="text-2xl font-mono">Personal Info</h1>
            <label>Name</label>
            <input name="fullname" placeholder={userData.fullname} value={userData.fullname} onChange={handleChange} className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg"/>
            <label>Username</label>
            <input name="username" placeholder={userData.username} value={userData.username} onChange={handleChange} className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="amitsr26"/>
            <label>Pronoun</label>
            <select name="pronoun" defaultValue={userData.pronoun} onChange={handleChange} className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" defaultValue="">
              <option value=""></option>
              <option value="He/They">He/him</option>
              <option value="She/Her">She/her</option>
            </select>
            <label>age</label>
            <input name="age" placeholder={userData.age} onChange={handleChange} className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="amitsr26@gmail.com"/>
            <label>Bio</label>
            <textarea name="bio" placeholder={userData.bio} onChange={handleChange} className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="A junior software engineer (student) with good catch in C++ and Web Development." rows='4'/>
            <label>Email</label>
            <input name="email" placeholder={userData.email} onChange={handleChange} className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="amitsr26@gmail.com"/>
            <label>Phone no.</label>
            <input name="contact" placeholder={userData.contact} onChange={handleChange} className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg" placeholder="+918750273613"/>
            <div className="text-2xl">Social Accounts</div>
            <label><AiFillInstagram className="text-xl mb-2"/></label>
            <input name="socialacc.instagram" placeholder={userData?.socialacc?.instagram || ""} onChange={handleChange} className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg"/>
            <label><AiFillTwitterCircle className="text-xl mb-2"/></label>
            <input name="socialacc.twitter" placeholder={userData?.socialacc?.twitter || ""} onChange={handleChange} className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg"/>
            <label><AiFillLinkedin className="text-xl mb-2"/></label>
            <input name="socialacc.linkedin" placeholder={userData?.socialacc?.linkedin || ""} onChange={handleChange} className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg mb-4"/>
            <button className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg text-center bg-black/90 text-white/80 hover:bg-white/70 hover:text-black/60">Save</button>
            <button className="border-[1px] pl-2 -mt-2 pt-1 pb-1 rounded-lg text-center bg-black/90 text-white/80 hover:bg-white/70 hover:text-black/90 hover:font-semibold">Cancel</button>
          </div>
        </div>
        {/* extremeRight */}
        <div className="relative left-[75%] h-[100%] w-[20rem] -mt-[54rem]">
          <div className="flex flex-col justify-start gap-4">
            <h1 className="text-2xl font-mono">Basic Details</h1>
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
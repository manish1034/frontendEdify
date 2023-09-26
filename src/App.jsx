import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccountSetting, EditProfile, LeaderBoard, Profile } from "./components/ProfileComponent";
import { Home, Navbar, About, Courses, StudyMaterial, Login, Signup, Contact, Newsletter, Footer } from "./components";

const App = () => {
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/courses" Component={Courses}/>
        <Route path="/studymaterial" Component={StudyMaterial}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
        <Route path="/settings" Component={AccountSetting}/>
        <Route path="/editprofile" Component={EditProfile}/>
        <Route path="/leaderboard" Component={LeaderBoard}/>
        <Route path="/profile" Component={Profile}/>
        <Route path="/contact" Component={Contact}/>
      </Routes>
      <Newsletter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
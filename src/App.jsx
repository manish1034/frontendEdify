import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/LoginContext";
import { AccountSetting, EditProfile, LeaderBoard, Profile } from "./components/ProfileComponent";
import { Home, Navbar, About, CoursesMain, ViewCourse, StudyMaterial, Login, Signup, Contact, Newsletter, Footer } from "./components";

const App = () => {
  return(
    <BrowserRouter>
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/courses" Component={CoursesMain}/>
        <Route exact path="/college/:course" Component={ViewCourse}/>
        <Route exact path="/school/:class" Component={ViewCourse}/>
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
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
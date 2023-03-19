import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";


function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/Home" element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/LogIn/Login";
import Register from "./Pages/Register/Register";
import Eror404 from "./Pages/Eror404/Eror404";
import Verfiy from "./Pages/Verfiycation/verfiy";

function App() {

  
  return (
    <div className="col-12 ">
   
   <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route  path="register" element={<Register/>}/>
        <Route  path="verfiy/:documentId" element={<Verfiy/>}/>
        <Route  path="*" element={<Eror404/>}/>

      </Route>
    </Routes>
   </BrowserRouter>
    </div>
  );
}
export default App;

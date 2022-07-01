import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Todo from "./components/Todo";
import Calender from "./components/Calender";
import Update from "./components/Update";
import Complete from "./components/Complete";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          {" "}
        </Route>
        <Route path="/todo" element={<Todo> </Todo>}></Route>
        <Route path="/update/:id" element={<Update> </Update>}></Route>
        <Route path="/complete" element={<Complete> </Complete>}>
          {" "}
        </Route>
        <Route path="/calender" element={<Calender> </Calender>}>
          {" "}
        </Route>
        {/* <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/register' element={<Register></Register>}> 4</Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

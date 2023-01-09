import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlist from "./userlist";
import Add_user from "./add_user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userlist />} />
        <Route path="/add" element={<Add_user />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

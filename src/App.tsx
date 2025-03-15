import "./App.css";
import Cards from "./components/Cards";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import NewCard from "./components/NewCard/NewCard";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import { UserProvider } from "./context/userContext";
function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-card" element={<NewCard/>} />
          </Routes>
        </Router>
      </div>
      </UserProvider>
    </>
  );
}

export default App;
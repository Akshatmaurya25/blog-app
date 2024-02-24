import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Login from "./components/Login";
import Signup from './components/Signup';
import AddArticle from "./components/AddArticle";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="box-border text-white flex flex-col h-screen font-body">
      <Router>
        <Navbar />
        <div className="min-h-screen dark:bg-gray-800 flex items-center justify-center">
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Article />}></Route>
            <Route path="/addArticle" element={<AddArticle />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
    
  
    
    );
}

export default App;

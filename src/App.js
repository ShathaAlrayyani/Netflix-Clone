import './App.css';
import Home from './Components/Home/home';
import { Routes, Route } from "react-router-dom";
//import NavBar from "./components/NavBar";
import FavList from "../src/Components/FavList/FavList";


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favList" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;

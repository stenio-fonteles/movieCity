import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home/index'
import Details from '../pages/Details/index'
export default function Routess() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    )
}
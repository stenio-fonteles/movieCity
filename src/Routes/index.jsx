import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home/index'
import Details from '../pages/Details/index'
import Stream from '../pages/Stream/index'
export default function Routess() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/assistir" element={<Stream/>}/>
        </Routes>
    )
}
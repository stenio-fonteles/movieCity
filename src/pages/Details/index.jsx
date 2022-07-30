import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function Details(){
    const {id} = useParams();
    // async function getData(){
    //     const {data} = await axios.get(`https://www.themoviedb.org/movie/${id}`)
    //     //console.log(data)
    // }
    // useEffect(()=>{getData()},[])
    
    return(
        <>{id}</>
    )
}
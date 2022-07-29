
import axios from "axios"
import { useEffect,useState } from "react"
import Grid from "../components/NavBar/Grid"
import Outdoor from "../components/NavBar/Outdoor"
import { Div } from "./styled"

export default function Api() {
    const [data, setData] = useState([])

    async function getData() {
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=758d90bb10802747712fd860965c0320&language=pt-BR")
        setData(data.results)
    }
    
  //generos
  //https://api.themoviedb.org/3/genre/movie/list?api_key=758d90bb10802747712fd860965c0320&language=pt-BR
    useEffect(()=>{
        getData()
    },[])
    return(
        <>
            <Outdoor url={data} />
            <Div>
                <Grid info={data}/>
            </Div>
        </>
    )
}

import axios from "axios"
import { useEffect,useState } from "react"
import Grid from "../components/NavBar/Grid"
import Outdoor from "../components/NavBar/Outdoor"
import { Div } from "./styled"

export default function Api() {
    const [data, setData] = useState([])

    const [image,setImage] = useState('')
    async function getData() {
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=758d90bb10802747712fd860965c0320&language=pt-BR")
        setData(data.results)
        let getUrl = data.results;

        // const randomElement = getUrl[Math.floor(Math.random() * getUrl.length)];
        // const urlImage = `https://image.tmdb.org/t/p/original/${randomElement.backdrop_path}`
        // setImage(urlImage)
    }
    // https://api.themoviedb.org/3/movie/76341?api_key=758d90bb10802747712fd860965c0320&language=pt-BR
    // https://api.themoviedb.org/3/collection/{collection_id}?api_key=<<api_key>>&language=en-US
    //https://api.themoviedb.org/3/collection/{collection_id}?api_key=758d90bb10802747712fd860965c0320&language=pt-BR
    

    
  
    useEffect(()=>{
        getData()
    },[])
 
    // image:
    // https://image.tmdb.org/t/p/original/
    return(
        <>
            <Outdoor url={data} />
            <Div>
                <Grid info={data}/>
            </Div>
        </>
    )
}
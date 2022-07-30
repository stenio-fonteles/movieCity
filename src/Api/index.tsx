
import axios from "axios"
import { useEffect,useState } from "react"
import Grid from "../components/Grid"
import Outdoor from "../components/Outdoor/index"
import { Div } from "./styled"

export default function Api() {
    const [data, setData] = useState([])
    const [dataSerie, setDataSerie] = useState([])
    const [newMovies, setNewMovies] = useState([])
    async function getDataMovie() {
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=758d90bb10802747712fd860965c0320&language=pt-BR")
        setData(data.results)
    }
    async function getDataSerie(){
        const {data} = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=758d90bb10802747712fd860965c0320&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0")
        setDataSerie(data.results)
    }
  //generos
  //https://api.themoviedb.org/3/genre/movie/list?api_key=758d90bb10802747712fd860965c0320&language=pt-BR
  //series
  //https://api.themoviedb.org/3/discover/tv?api_key=758d90bb10802747712fd860965c0320&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0

  //semelhantes
  //https://api.themoviedb.org/3/movie/32608/similar?api_key=758d90bb10802747712fd860965c0320&language=en-US&page=1

  //assistir filme
  //https://api.themoviedb.org/3/movie/3/videos?api_key=758d90bb10802747712fd860965c0320&language=en-US

  //proximos filmes nos cinemas
  //https://api.themoviedb.org/3/movie/upcoming?api_key=758d90bb10802747712fd860965c0320&language=pt-BR&page=1
    
  async function getDataNewMovies(){
    const {data} = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=758d90bb10802747712fd860965c0320&language=pt-BR&page=1")
    setNewMovies(data.results)
}
  
  useEffect(()=>{
        getDataMovie()
        getDataSerie()
        getDataNewMovies()  
    },[])

    
    return(
        <>
            <Outdoor url={data}  />
            <Div>
                <Grid info={data} infoSeries={dataSerie} infoNewMovies={newMovies}/>
            </Div>
        </>
    )
}
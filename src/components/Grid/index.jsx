import Card from "../Card/index.jsx"
import {Section,Div,Title} from "./Styled.js"

export default function Grid({info,infoSeries,infoNewMovies}){
    return (
        <> 
        <Title>Lançamentos</Title>
        <Section>
            {infoNewMovies.map((data)=>{
                let url = `https://image.tmdb.org/t/p/original/${data.poster_path}`
                return(
                    <Div  key={data.id}>
                        <Card url={url} Name={data.title} Placar={data.popularity} Create={data.release_date}></Card>
                    </Div>
                )
            })}
        </Section>
            <Title>filmes</Title>
            <Section>
                {info.map((data)=>{ 
                    let url = `https://image.tmdb.org/t/p/original/${data.poster_path}`
                    return(
                        <Div  key={data.id}>
                            <Card url={url} Name={data.title} Placar={data.vote_average} Create={data.release_date} data={data.id}></Card>
                        </Div>
                    )
                })}
            </Section>
            <Title>Series</Title>
            <Section>
                {infoSeries.map((data)=>{
                    let url = `https://image.tmdb.org/t/p/original/${data.poster_path}`
                    return(
                        <Div  key={data.id}>
                            <Card url={url} Name={data.name} Placar={data.vote_average} Create={data.first_air_date}></Card>
                        </Div>
                    )
                })}
           
            </Section>
           
        </>
    )
}
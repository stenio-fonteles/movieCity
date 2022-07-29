import Card from "../Card/index.jsx"
import {Section,Div} from "./Styled.js"

export default function Grid({info}){
    return (
        <>
            <h2>filmes</h2>
            <Section>
                {info.map((data)=>{
                    let url = `https://image.tmdb.org/t/p/original/${data.poster_path}`
                    console.log(data)
                    return(
                        <Div  key={data.id}>
                            <Card url={url} Name={data.title} Placar={data.vote_average} Create={data.release_date}></Card>
                        </Div>
                    )
                })}
            </Section>
            <h2>Series</h2>
        </>
    )
}
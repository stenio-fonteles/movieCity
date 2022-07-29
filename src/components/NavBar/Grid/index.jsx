import Card from "../Card/index.jsx"
import {Section} from "./Styled.js"

export default function Grid({info}){
    return (
        <>
            <Section>
                {info.map((data)=>{
                    let url = `https://image.tmdb.org/t/p/original/${data.poster_path}`
                   // console.log(url)
                    return(
                        <Card key={Math.random()} url={url} name={data.original_title}/>
                    )
                })}
            </Section>
        </>
    )
}
import { useEffect, useState } from "react";
import NavBar from "..";
import { Poster,Title,SubTitle,Section,Button} from "./styled";

export default function Outdoor({url}) {
    const numero = Math.floor(Math.random() * url.length);
    var find = url[numero]
    if(find === undefined){
       return
    }
console.log(url)
    return(
       <>
        <Poster src={`https://image.tmdb.org/t/p/original/${find.backdrop_path}` }/>
        <NavBar/>
        <Section>
            <Title>{find.title}</Title>
            <SubTitle>{find.overview}</SubTitle>
            <Button>Comprar</Button>
        </Section>
       </>
    )
}
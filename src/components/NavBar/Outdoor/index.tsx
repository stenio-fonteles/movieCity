import { useEffect, useState } from "react";
import { Poster,Title,SubTitle,Section} from "./styled";

export default function Outdoor({url}) {
    const numero = Math.floor(Math.random() * url.length);
    var find = url[numero]
    if(find === undefined){
       return
    }

    return(
       <>
        <Poster src={`https://image.tmdb.org/t/p/original/${find.backdrop_path}` }/>
        <Section>
            <Title>{find.title}</Title>
            <SubTitle>{find.overview}</SubTitle>
        </Section>
       </>
    )
}
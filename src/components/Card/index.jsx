import {Image,Section,Namee,P,Div,Score,DivScore} from "./stilinho.js"
import { Link } from "react-router-dom";
export default function Card({url,Name,Create,Placar,data}){
    //console.log(data)
    return(
        <Section >
                <a href={`https://www.themoviedb.org/movie/${data}`}>
                  <Image src={url}></Image>
                <Namee>{Name}</Namee>
                <Div>
                    <P>{Create}</P>
                    <DivScore>
                        <Score/>
                        <P>{Placar}</P>
                    </DivScore>
                </Div>
        
        </a>
            </Section>


    )
}
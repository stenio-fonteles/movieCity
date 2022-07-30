import {Image,Section,Namee,P,Div,Score,DivScore} from "./stilinho.js"
export default function Card({url,Name,Create,Placar,data}){
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
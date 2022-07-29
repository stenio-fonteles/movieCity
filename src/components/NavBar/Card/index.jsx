import {Image,Section,Namee,P,Div,Score,DivScore} from "./stilinho.js"

export default function Card({url,Name,Create,Placar}){
   // console.log(Name)
    return(
        <Section>
            <Image src={url}></Image>
            <Namee>{Name}</Namee>
            <Div>
                <P>{Create}</P>
                <DivScore>
                    <Score/>
                    <P>{Placar}</P>
                </DivScore>
            </Div>
        </Section>
    )
}
import {Image,Section,Name} from "./stilinho.js"

export default function Card({url,name}){
   
    return(
        <Section>
            <Image src={url}></Image>
            {/* <Name >{name}</Name> */}
        </Section>
    )
}
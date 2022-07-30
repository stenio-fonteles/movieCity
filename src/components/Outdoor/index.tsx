import NavBar from "../NavBar";
import { Poster,Title,SubTitle,Section,Button} from "./styled";
import { Link } from "react-router-dom";
export default function Outdoor({url}) {
    const numero = Math.floor(Math.random() * url.length);
    var find = url[numero]
    if(find === undefined){
       return
    }
    return(
       <>
        <Poster src={`https://image.tmdb.org/t/p/original/${find.backdrop_path}` }/>
        <NavBar/>
        <Section>
            <Title>{find.title}</Title>
            <SubTitle>{find.overview}</SubTitle>
            <Link to={`/details?q${find.id}`}><Button>Comprar</Button></Link>
        </Section>
       </>
    )
}
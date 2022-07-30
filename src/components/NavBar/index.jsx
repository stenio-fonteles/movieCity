import { Nav,Account, Notify,Meet,Li,H2,DECO } from "./styled"
import { Link } from "react-router-dom";
export default function NavBar() {
    return(
        <Nav>
                <H2>MovieCity</H2>
            <ul>
                <li onClick={()=>{window.location = "#filme";}}>Filmes</li>
                <li onClick={() => {window.location = "#series"}}>Séries</li>
                <Link to={'/assistir'}>
                    <DECO>Assistir agora</DECO>
                </Link> 
                <li>Originais</li>
            </ul>
            <ul>
                <Li></Li>
                <Meet/>
                <Notify/>
                <Account/>
                
            </ul>

        </Nav>
    )
}
import { Nav,Account, Notify,Meet,Li,H2 } from "./styled"
export default function NavBar() {
    return(
        <Nav>
                <H2>MovieCity</H2>
            <ul>
                <li>Filmes</li>
                <li>Séries</li>
                <li>Originais</li>
                <li>Explore</li>
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
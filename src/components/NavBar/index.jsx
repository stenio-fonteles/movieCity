import { Nav,Account, Notify,Meet,Li } from "./styled"
export default function NavBar() {
    return(
        <Nav>
                <h2>MovieCity</h2>
            <ul>
                <li>Séries</li>
                <li>Filmes</li>
                <li>Originais</li>
                <li>Explore</li>
            </ul>
            <ul>
                <Meet/>
                <Li></Li>
                <Notify/>
                <Account/>
                
            </ul>

        </Nav>
    )
}
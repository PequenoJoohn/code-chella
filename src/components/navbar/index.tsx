import { BsList } from "react-icons/bs";

import { Container } from "./styles";

const Navbar = () => {
    return (
        <Container>
            <img src="./assets/logo-white.png" alt="" />
            <BsList size={44}/>

            <nav>
                <ul>
                    <li>A experiência</li>
                    <li>Mapa de Setores</li>
                    <li>Informações</li>
                    <li>Ingresso</li>
                </ul>
            </nav>
        </Container>
    )
}

export default Navbar;
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

import { Container } from "./styles";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    function handleOpenMenu() {
        const navbar = document.querySelector("nav");
        setOpen(open => !open);

        //Caso open for true
        if (open) {
            return navbar?.classList.toggle("open");
        }
        navbar?.classList.toggle("open");
    }

    return (
        <Container>
            <img src="./assets/logo-white.png" alt="" />
            {open ?
                <MdOutlineClose size={44} onClick={() => handleOpenMenu()} />
                :
                <BsList size={44} onClick={() => handleOpenMenu()} />
            }
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
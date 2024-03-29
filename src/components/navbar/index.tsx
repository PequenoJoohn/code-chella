import { useState } from "react";
import { BsList } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function handleOpenMenu() {
    const navbar = document.querySelector("nav");
    setOpen((open) => !open);
    return navbar?.classList.toggle("open");
  }

  return (
    <Container>
      <Link to={"/"}>
        <img src="./assets/logo-white.png" alt="" />
      </Link>
      {open ? (
        <MdOutlineClose size={44} onClick={() => handleOpenMenu()} />
      ) : (
        <BsList size={44} onClick={() => handleOpenMenu()} />
      )}
      <nav>
        <ul>
          <li>
            <Link to="/experience">A experiência</Link>
          </li>
          <li>
            <Link to="/mapping">Mapa de Setores</Link>
          </li>
          <li>
            <Link to="/informations">Informações</Link>
          </li>
          <li>
            <Link to="/ticket">Ingresso</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;

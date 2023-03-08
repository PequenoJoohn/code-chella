import { FaWhatsapp, FaTwitch, FaInstagram, FaTwitter } from "react-icons/fa";

import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <div className="social-medias">
        <img src="./assets/logo.png" alt="" />
        <p>
          Acesse nossas redes:{" "}
          <ul>
            <li>
              <FaWhatsapp size={32} color={"#444444"} />
            </li>
            <li>
              <FaTwitch size={32} color={"#444444"} />
            </li>
            <li>
              <FaInstagram size={32} color={"#444444"} />
            </li>
            <li>
              <FaTwitter size={32} color={"#444444"} />
            </li>
          </ul>
        </p>
      </div>

      <div className="copyright">
        <p>Desenvolvido por Jonathan Matos. Projeto sem fins comerciais</p>
      </div>
    </Container>
  );
};

export default Footer;

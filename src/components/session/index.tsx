import Button from "../../atoms/Button";
import { Container } from "./styles";

const session = () => {
  return (
    <Container>
      <div className="picture"/>

      <div className="description">
        <h6>{"< 11 e 12 de Março > \nAluródromo de São Paulo"}</h6>
        <p>
          Hora de programar nossa memória com novas lembranças! Uma nova
          experiência sobre música, linguagens e, claro, tecnologia! Somos um
          festival diverso, com vários artistas e referências. Divirta-se!
        </p>

        <Button label="Comprar ingresso!" icon="./assets/icons/ticket.svg" />
      </div>
    </Container>
  );
};

export default session;

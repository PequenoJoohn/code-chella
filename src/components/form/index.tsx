import { Container } from "./styles";

const Form = () => {
  return (
    <Container>
      <div>
        <label htmlFor="">Nome Completo:</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input type="text" />
      </div>
    </Container>
  );
};

export default Form;

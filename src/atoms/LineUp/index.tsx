import { Container } from "./styles";

interface ILineUp {
  title: string;
}

const LineUp = ({ title }: ILineUp) => {
  return <Container>/{title}/</Container>;
};

export default LineUp;

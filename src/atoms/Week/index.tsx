import { Container } from "./styles";

interface IWeek {
  text: string;
}

const Week = ({ text }: IWeek) => {
  return <Container>{text}</Container>;
};

export default Week;

import { ReactSVG } from "react-svg";
import { Container } from "./styles";

interface IButton {
  label: string;
  icon?: string;
}

const Button = ({ label, icon }: IButton) => {
  return (
    <Container>
      <p>{label}</p> {icon && <ReactSVG src={icon} />}
    </Container>
  );
};

export default Button;

import { ReactSVG } from "react-svg";
import { Container } from "./styles";

interface IButton {
  label: string;
  type: "reset" | "submit" | "button";
  icon?: string;
}

const Button = ({ label, icon, type }: IButton) => {
  return (
    <Container type={type}>
      <p>{label}</p> {icon && <ReactSVG src={icon} />}
    </Container>
  );
};

export default Button;

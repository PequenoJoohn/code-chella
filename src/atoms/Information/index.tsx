import Button from "../Button";
import { Container } from "./styles";

interface IInformation {
    picture: string;
    title: string;
    description: string;
    button: boolean;
    position: "left" | "right" | string;
}

const Information = ({ picture, title, description, position, button }: IInformation) => {
    return (
        <Container image={picture} position={position}>
            <div className="picture" />

            <div className="description">
                <h6>{title}</h6>
                <p>
                    {description}
                </p>

                {button &&
                    <Button label="Comprar ingresso!" icon="./assets/icons/ticket.svg" />
                }
            </div>
        </Container>
    );
};

export default Information;

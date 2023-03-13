import { Box, Container } from "./styles";

const Sectors = () => {

    return (
        <Container>
            <div className="space" />
            <ul>
                <li>
                    <p>Legenda:</p>
                </li>
                <li>
                    <Box background="#0E7DF1" />
                    <p>Pista Premium</p>
                </li>

                <li>
                    <Box background="#FE016E" />
                    <p>Pista Comum</p>
                </li>

                <li>
                    <Box background="#01A89E" />
                    <p>Cadeiras térreo</p>
                </li>

                <li>
                    <Box background="#3F51B5" />
                    <p>Cadeiras superiores</p>
                </li>

                <li>
                    <Box background="#0E7DF1" />
                    <p>Rampas</p>
                </li>
            </ul>
        </Container>
    )

}

export default Sectors;
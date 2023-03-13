import Banner from "../../atoms/banner";
import Information from "../../atoms/Information";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Sectors from "../../components/sectors";
import { Container } from "./styles";

const Mapping = () => {
    const banners =
    {
        backgroundMobile: "./assets/banner-sectors-mobile.png",
        backgroundTablet: "./assets/banner-sectors-tablet.png",
        backgroundDesktop: "./assets/banner-sectors-desktop.png"
    }

    const informations = [
        {
            title: "Pista",
            description: "Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.",
            picture: "./assets/setors/runway.png",
            position: "center",
            button: false
        },
        {
            title: "Pista Premium",
            description: "Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.",
            picture: "./assets/setors/premium.png",
            position: "center",
            button: false
        },
        {
            title: "Cadeiras",
            description: "Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.",
            picture: "./assets/setors/chairs.png",
            position: "center",
            button: false
        },
    ]

    return (
        <Container>
            <Navbar />
            <Banner backgroundDesktop={banners.backgroundDesktop} backgroundTablet={banners.backgroundTablet} backgroundMobile={banners.backgroundMobile} />
            <Sectors />
            <p className="title">Mais detalhes sobre os setores:</p>
            <div>
                {informations.map((information) => (
                    <Information title={information.title} description={information.description} picture={information.picture} position={information.position} button={information.button} />
                ))
                }
            </div>
            <Footer />
        </Container>
    )
}

export default Mapping;
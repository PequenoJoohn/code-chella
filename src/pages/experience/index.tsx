import Banner from "../../atoms/banner";
import Information from "../../atoms/Information";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const Experience = () => {

    const banners = {
        backgroundMobile: "./assets/banner-experience-mobile.png",
        backgroundTablet: "./assets/banner-experience-tablet.png",
        backgroundDesktop: "./assets/banner-experience-desktop.png"
    }

    const informations = [
        {
            title: "Acessibilidade e Inclusão",
            description: "Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!",
            picture: "./assets/experience/people.png",
            position: "left",
            button: false
        },
        {
            title: "Sustentabilidade",
            description: "Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.",
            picture: "./assets/experience/sustentability.png",
            position: "right",
            button: false
        },
        {
            title: "Atrações",
            description: "Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!",
            picture: "./assets/experience/attractions.png",
            position: "left",
            button: false
        },
    ]

    return (
        <>
            <Navbar />
            <Banner backgroundDesktop={banners.backgroundDesktop} backgroundTablet={banners.backgroundTablet} backgroundMobile={banners.backgroundMobile} />
            {informations.map((information) => (
                <Information title={information.title} description={information.description} picture={information.picture} position={information.position} button={information.button} />
            ))
            }
            <Footer />
        </>
    )
}

export default Experience;
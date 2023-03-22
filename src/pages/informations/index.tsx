import { useState } from "react";
import Accordion from "../../atoms/accordion";
import Banner from "../../atoms/banner";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Container } from "./styles";

const Informations = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const banners = {
    backgroundMobile: "./assets/banner-informations-mobile.png",
    backgroundTablet: "./assets/banner-informations-tablet.png",
    backgroundDesktop: "./assets/banner-informations-desktop.png",
  };

  const accordionData = [
    {
      title: "Quais serão as atrações?",
      content: `Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!`,
    },
    {
      title: "Qual é a classificação etária?",
      content: `O evento é restrito para menores de 18 anos. Todos os participantes deverão apresentar um documento oficial com foto na entrada do evento para comprovar a idade.`,
    },
    {
      title: "Quais são os setores disponíveis?",
      content: `O evento contará com três setores: pista premium, pista comum e cadeiras. O setor de pista premium oferece uma experiência mais exclusiva, com uma visão privilegiada do palco e acesso a bares e banheiros exclusivos. Já a pista comum é uma ótima opção para quem quer aproveitar o evento de forma mais descontraída, com mais espaço para dançar e curtir a música. Por fim, o setor de cadeiras oferece um ambiente mais confortável para quem prefere assistir ao show sentado.`,
    },
    {
      title: "Quais são os itens proibidos?",
      content: `Para garantir a segurança de todos os participantes, alguns itens serão proibidos no evento. São eles: armas de fogo ou branca, objetos pontiagudos ou cortantes, drogas ilícitas, bebidas alcoólicas, alimentos e bebidas trazidos de fora do evento, câmeras profissionais, drones e outros equipamentos de gravação de vídeo. Também não será permitida a entrada de animais de estimação no evento. Todos os participantes serão revistados na entrada do evento para garantir o cumprimento dessas regras.`,
    },
  ];

  return (
    <Container>
      <Navbar />
      <Banner
        backgroundDesktop={banners.backgroundDesktop}
        backgroundTablet={banners.backgroundTablet}
        backgroundMobile={banners.backgroundMobile}
      />
      <div className="accordion">
        <h3>Perguntas Frequentes:</h3>
        {accordionData.map((accordion, index) => (
          <Accordion
            key={index}
            title={accordion.title}
            content={accordion.content}
            isActive={index === activeIndex}
            onAccordionClick={() => handleAccordionClick(index)}
          />
        ))}
      </div>

      <Footer />
    </Container>
  );
};

export default Informations;

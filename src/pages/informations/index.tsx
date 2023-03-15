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
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Quais são os setores disponíveis?",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
    {
      title: "Quais são os itens proibidos?",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`,
    },
    {
      title: "Quais são os itens proibidos?",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`,
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

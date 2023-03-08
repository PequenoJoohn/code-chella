import Week from "../../atoms/Week";
import { Container } from "./styles";

const Shows = () => {
  const shows = [
    {
      title: "sábado <11/03>",
      list: [
        "System of a DOM",
        "Python Maiden",
        "Apollo Client 2001",
        "Bon Java",
        "NickCallback",
        "Linkin Promises",
        "Fullstack Fighters",
        "Papa React",
        "Angular in Chains",
        "Agnostic Front-end",
        "SlipkNode",
        "Pink Flutter",
        "Kiss",
      ],
    },
    {
      title: "domingo <12/03>",
      list: [
        "Lana Del Ploy",
        "Dua Lib",
        "The Backnd",
        "CSS Styles",
        "ArrayAna Grande",
        "DJ Query",
        "Miley Cypress",
        "The Bootstrap Boys",
        "Json Derulo",
        "CloudPlay",
        "Dev Lovato",
        "Kylie MiLOG",
        "Jenkins Brothers",
        "Rubycat Dolls",
      ],
    },
    {
      title: "segunda <13/03>",
      list: ["Ana Victória"],
    },
  ];

  return (
    <Container>
      {shows.map((show) => (
        <div className="shows" key={show.title}>
          <Week text={show.title} />
          <div className="show">
            {show.list.map((sh) => (
              <p key={sh}>{sh}</p>
            ))}
          </div>
        </div>
      ))}

      <div className="picture" />
    </Container>
  );
};

export default Shows;

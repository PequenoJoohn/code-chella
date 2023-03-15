import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import { Container } from "./styles";

interface IAccordion {
  title: string;
  content: string;
  isActive: boolean;
  onAccordionClick: () => void;
}

const Accordion = ({
  title,
  content,
  isActive,
  onAccordionClick,
}: IAccordion) => {
  return (
    <Container> 
      <p onClick={onAccordionClick}>
        {title} {isActive ? <IoMdArrowDropup /> : <IoMdArrowDropdown /> }
      </p>
      {isActive && (
        <div>
          <p>{content}</p>
        </div>
      )}
    </Container>
  );
};

export default Accordion;

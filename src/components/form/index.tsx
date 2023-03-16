import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../atoms/Button";

import { Container } from "./styles";

interface ITicket {
  name: string;
  email: string;
  ticket: string;
  birthday: string;
}

const Form = () => {
  const [isValidy, setIsValidy] = useState(false);
  const [steps, setSteps] = useState(1);
  const [isTicket, setIsTicket] = useState<ITicket>();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    const { name, email, ticket, birthday } = data;

    const ticketGenerate = {
      name,
      email,
      ticket: ticket === "premium" ? "setor premium" : ticket,
      birthday: new Date(birthday).toLocaleDateString("pt-BR", { timeZone: "UTC" })
    }

    if (isValidy) {
      setSteps(2);
      setIsTicket(ticketGenerate);
    }

  };

  const validateDate = (value: number) => {
    const selected = new Date(value).getFullYear();
    const now = new Date().getFullYear();

    console.log(now - selected >= 18)

    if (now - selected >= 18) {
      setIsValidy(true);
      return now - selected >= 18;
    }

    setIsValidy(false);
  }

  return (
    <Container>
      {steps === 1 ?
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Preencha o formulário a seguir:</h3>
          <div>
            <label htmlFor="">Nome Completo:</label>
            <input type="text" {...register("name", { required: true })} />
            {errors.name && <span>Insira seu nome completo!</span>}
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input type="email" {...register("email", { required: true })} />
            {errors.email && <span>Insira um e-mail válido!</span>}
          </div>

          <div className="separate">

            <div>
              <label htmlFor="">Tipo de ingresso:</label>
              <select {...register("ticket", {
                required: true
              })}>
                <option value="" selected disabled hidden>Tipo de ingresso</option>
                <option value="pista">pista</option>
                <option value="premium">pista premium</option>
                <option value="cadeiras">cadeiras</option>
              </select>
              {errors.ticket && <span>Escolha um tipo de ingresso!</span>}

            </div>

            <div>
              <label htmlFor="">Data de nascimento:</label>
              <input type="date" {...register("birthday", {
                valueAsDate: true,
                validate: validateDate,
              })} />
              {!isValidy && <span>Você deve ter 18 anos para concluir a compra!</span>}
            </div>
          </div>
          <Button label="Avançar!" type="submit" icon="./assets/icons/arrow-right.svg" />
        </form>
        : <div className="ticket">
          <p className="ticket-title">Uhul, agora sim!
            Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</p>

          <div className="ticket-print">
            <div className="ticket-print-header">
              <img src="./assets/logo.png" alt="icone" />
              <img src="./favicon-white.png" alt="icone" />
            </div>

            <div className="ticket-print-body">

              <div className="ticket-print-body-qrcode">
                <img src="./assets/qrcode.png" alt="qrcode" />
              </div>

              <div className="ticket-print-body-description">
                <p className="ticket-print-body-name">{isTicket?.name}</p>
                <p className="ticket-print-body-type">Ingresso Cortesia</p>
                <p className="ticket-print-body-ticket">Setor {isTicket?.ticket}</p>
                <p className="ticket-print-body-birthday">Data: 11/03</p>
                <p className="ticket-print-body-locale">Local: São Paulo-SP</p>
              </div>
            </div>
          </div>
        </div>}
    </Container>
  );
};

export default Form;

import { useForm } from "react-hook-form";
import Button from "../../atoms/Button";
import { Container } from "./styles";

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    const { name, email, ticket, birthday } = data;

    const ticketGenerate = {
      name,
      email,
      ticket: ticket === "premium" ? "setor premium" : ticket,
      birthday: new Date(birthday).toLocaleDateString("pt-BR", { timeZone: "UTC" })
    }
    console.log(ticketGenerate);
  };

  const validateDate = (value: number) => {
    const selected = new Date(value).getFullYear();
    const now = new Date().getFullYear();
    return now - selected >= 18;
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Nome Completo:</label>
        <input type="text" {...register("name", { required: true })} />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input type="text" {...register("email", { required: true })} />
      </div>
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
      </div>

      <div>
        <label htmlFor="">Data de nascimento:</label>
        <input type="date" {...register("birthday", {
          valueAsDate: true,
          validate: validateDate
        })} />
      </div>
      <Button label="Avançar!" type="submit" />
    </Container>
  );
};

export default Form;

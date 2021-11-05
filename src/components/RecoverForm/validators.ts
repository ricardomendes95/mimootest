import { Recover } from "../../services/types";
import { SchemaOf, object, string, Asserts } from "yup";

const schema: SchemaOf<Recover> = object({
  email: string()
    .required("Informe um Email válido")
    .email("Email inválido/inexistente"),
});

export type FormProps = Asserts<typeof schema>;

export default schema;

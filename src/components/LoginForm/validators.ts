import { Login } from '../../services/types';
import { SchemaOf, object, string, Asserts } from 'yup';

const schema: SchemaOf<Login> = object({
  login: string()
    .required('Informe um login válido')
    .email('Email inválido/inexistente'),
  password: string().required('Informe uma senha válida').min(6, 'A senha tem que ter no mínimo 6 caracteres'),
});

export type FormProps = Asserts<typeof schema>;

export default schema;

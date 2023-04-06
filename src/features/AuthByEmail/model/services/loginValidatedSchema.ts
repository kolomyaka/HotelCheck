import { object, string } from 'yup';

export const loginValidatedSchema = object({
    email: string().required('Обязательное поле').email('Неверный формат почты'),
    password: string().required('Обязательное поле').min(8, 'Пароль должен быть не менее 8 символов' )
}).required();
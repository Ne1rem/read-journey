import * as Yup from 'yup';
import { emailValidator } from './emailValidShema';

export const validationSchema = Yup.object({
    name: Yup.string().required('*Name is required'),
    email: Yup.string()
        .matches(emailValidator, '*Please enter a valid email address')
        .required('*Email is required'),
    password: Yup.string()
        .min(7, '*Password must be at least 7 characters')
        .required('*Password is required'),
});
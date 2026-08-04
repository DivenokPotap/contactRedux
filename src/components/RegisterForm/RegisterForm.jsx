import { useDispatch,} from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { fetchSingUpUser } from "../../redux/authOperations";
import styled from 'styled-components';
import css from './Registerform.module.css'


const SingUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Закоротко!")
    .max(70, "Задовго!")
    .required("Імʼя обовʼязковий!"),
  email: Yup.string()
    .min(2, "Закоротко!")
    .max(70, "Задовго!")
    .required("Пошта обовʼязковий!"),
  password: Yup.string()
    .required("пароль обовʼязковий!")
})

const StyledForm = styled(Form)`
    display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto; 
  font-size: 20px;
  text-align: center;
`
const StyledField = styled(Field)`
   margin-left: 40px;
`
const StyledField2 = styled(Field)`
   margin-top: 10px;
   margin-left: 15px;
`
const StyledField3 = styled(Field)`
   margin-top: 10px;
   margin-left: 10px;
   margin-bottom: 20px;
`


const RegisterForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (userData, { resetForm }) => {
    if (!userData) {
      toast.error("Введіть дані");
      return
    }

    dispatch(fetchSingUpUser(userData))
    resetForm();
     };
    
    return (
        <Formik
        initialValues={{
        name: "",
        email: "",
        password: "",
    }}
     onSubmit={handleSubmit}
      validationSchema={SingUpSchema}
        >
        <StyledForm>
          <h2>Створити аккаунт</h2> 
         <label htmlFor="name">
          Імʼя
          <StyledField name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </label>  
        <label htmlFor="email">
          Пошта
          <StyledField2 name="email" type="text" />
          <ErrorMessage name="email" component="div" />
        </label>
         <label htmlFor="password">
          Пароль
          <StyledField3 name="password" type="password" />
          <ErrorMessage name="password" component="div" />
         </label>       
         <button className={css.BTN} type="submit">Ввійти</button>
        <Toaster />
        </StyledForm>
        </Formik>
    )
}

export default RegisterForm;
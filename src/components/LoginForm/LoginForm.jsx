import { useDispatch,} from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { fetchLogInUser } from "../../redux/authOperations";
import { Link } from "react-router";
import styled from 'styled-components';
import css from './LoginForm.module.css'


const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Закоротко!")
    .max(70, "Задовго!")
    .required("Пошта обовʼязкова!"),
  password: Yup.string()
    .required("Пароль обовʼязковий!")
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
   margin-top: 20px;
   margin-left: 35px;
   margin-bottom: 20px;
`
const StyledLink = styled(Link)`
   margin-top: 20px;
`



export const LoginForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (userData, { resetForm }) => {
    if (!userData) {
      toast.error("Введіть дані");
      return
    }

    dispatch(fetchLogInUser(userData))
    resetForm();
     };
    
    return (
        <div>
        <Formik
     initialValues={{
        email: "",
        password: "",
    }}
     onSubmit={handleSubmit}
      validationSchema={LogInSchema}
        >
        <StyledForm>
        <h2>Ввійти в аккаунт</h2>     
        <label htmlFor="email">
          Пошта
          <StyledField name="email" type="text" />
          <ErrorMessage name="email" component="div" />
        </label>
         <label htmlFor="password">
          Пароль
          <StyledField2 name="password" type="password" />
          <ErrorMessage name="password" component="div" />
         </label>       
         <button className={css.BTN} type="submit">Ввійти</button>
            <Toaster />
              <StyledLink to="/register">Do not have an account yet?</StyledLink>
        </StyledForm>
        </Formik>
        </div>
    )
}
import { useDispatch} from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { fetchCreateContacts } from "@/redux/contactOperations";
import css from "./ContactForm.module.css";
import styled from 'styled-components';
const phoneRegex = /^[0-9\s()+-]+$/;

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Закоротко!")
    .max(70, "Задовго!")
    .required("Імʼя обовʼязкове!"),
  number: Yup.string()
    .matches(phoneRegex, "Неправильний формат")
    .required("Номер обовʼязковий!")
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
   margin-left: 40px
`
const StyledField2 = styled(Field)`
   margin-left: 20px
`


export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (!values) {
      toast.error("Введіть дані");
      return
    }

    dispatch(fetchCreateContacts(values))
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
        checked: false,
      }}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <StyledForm>
        <h2>Додайте контакт</h2>
        
        <label className={css.label} htmlFor="name">
          Імʼя
          <StyledField name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </label>
         <label className={css.label} htmlFor="number">
          Номер
          <StyledField2 name="number" type="tel" />
          <ErrorMessage name="number" component="div" />
        </label>


        
        <button className={css.BTN} type="submit">Додай контакт</button>
        <Toaster />
        </StyledForm>
    </Formik>
  );
};


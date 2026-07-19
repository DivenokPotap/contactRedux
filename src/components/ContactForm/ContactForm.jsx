import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { fetchCreateContacts } from "../../redux/contactOperations";

const phoneRegex = /^[0-9\s()+-]+$/;

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Закоротко!")
    .max(70, "Задовго!")
    .required("Імʼя обовʼязковий!"),
  number: Yup.string()
    .matches(phoneRegex, "Неправильний формат")
    .required("Номер обовʼязковий!")
})

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, {resetForm}) => {
    dispatch(fetchCreateContacts({
      ...values, checked: false
    }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form>
        <h2>Додайте контакт</h2>
        
        <label htmlFor="name">
          Імʼя
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </label>
         <label htmlFor="number">
          Номер
          <Field name="number" type="tel" />
          <ErrorMessage name="number" component="div" />
        </label>
        
        <button type="submit">Add Contact</button>
        <Toaster />
        </Form>
    </Formik>
  );
};


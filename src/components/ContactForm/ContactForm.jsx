import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import toast, { Toaster } from "react-hot-toast";
import css from "./ContactForm.module.css"

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const text = form.elements.text.value;
    const isValid = text.length >= 4
    const number = form.elements.number.value;
    
    if (isValid){
    dispatch(addContact( text, number ));
    toast.success('Додано новий контакт')
    form.reset();
    } else{
      toast.error("Недостатньо символів")
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className={css.form}>
      <input
        type="text"
        name="text"
        placeholder="Enter name..."
      />

      <input
        type="tel"
        name="number"
        placeholder="Enter number..."
      />

      <button type="submit">Add Contact</button>
      </div>
      <Toaster/>
    </form>
  );
};


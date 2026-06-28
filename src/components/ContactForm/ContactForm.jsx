import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsReducer";
import css from "./ContactForm.module.css"

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const text = form.elements.text.value;
    const number = form.elements.number.value;

    dispatch(addContact( text, number ));

    form.reset();
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
    </form>
  );
};


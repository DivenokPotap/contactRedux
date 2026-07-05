import { useDispatch } from "react-redux";
import { deleteContact, toggle } from "../../redux/contactsSlice";
import css from "./Contact.module.css"

export const Contact = ({contact}) => {
    const dispatch = useDispatch()
    const handleDelete = () =>{
        dispatch(deleteContact(contact.id))
    }
    const handleToggle = () =>{
        dispatch(toggle(contact.id))
    }

    return (
        <div className={css.contact}>
          <input
            type="checkbox"
            checked={contact.checked}
            onChange={handleToggle}
          />
          <p>{contact.text}</p>
          <p>{contact.number}</p>
          <button onClick={handleDelete}>
            Видалити
          </button>
        </div>
      );
}
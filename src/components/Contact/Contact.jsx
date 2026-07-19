import { useDispatch } from "react-redux";
import css from "./Contact.module.css"
import { fetchDeleteContacts, toggle } from "../../redux/contactOperations";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch()
    const handleDelete = (userId) =>{
        dispatch(fetchDeleteContacts(userId))
    }
    const handleToggle = () =>{
        dispatch(toggle(contact))
    }

    return (
        <div className={css.contact}>
          <input
            type="checkbox"
            checked={contact.checked || false}
            onChange={handleToggle}
          />
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={ () => handleDelete(contact.id)}>
            Видалити
          </button>
        </div>
      );
}
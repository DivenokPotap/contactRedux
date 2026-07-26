import { useDispatch } from "react-redux";
import css from "./Contact.module.css"
import { fetchDeleteContacts, toggle } from "../../redux/contactOperations";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch()
    const handleDelete = () =>
        dispatch(fetchDeleteContacts(contact.id))
    const handleToggle = () =>
        dispatch(toggle(contact))
    

    return (
        <div className={css.contact}>
          <input
            type="checkbox"
          checked={contact.checked || false}
          name="checked"
            onChange={handleToggle}
          />
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button type="button" onClick={handleDelete}>
            Видалити
          </button>
        </div>
      );
}
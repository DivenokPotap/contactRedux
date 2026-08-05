import { useDispatch } from "react-redux";
import css from "./Contact.module.css"
import { fetchDeleteContacts } from "../../redux/Contacts/contactOperations";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch()
    const handleDelete = () =>
        dispatch(fetchDeleteContacts(contact.id))
    

    return (
        <div className={css.contact}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button className={css.CBTN} type="button" onClick={handleDelete}>
            Видалити
          </button>
        </div>
      );
}
import { useDispatch } from "react-redux";
import css from "./Contact.module.css"
import { useDeleteContactMutation } from "../../redux/Contacts/contactsApi";

export const Contact = ({ contact }) => {
  const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation()
    return (
        <div className={css.contact}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button className={css.CBTN} type="button" onClick={() => deleteContact(contact.id)}>
            Видалити
          </button>
        </div>
      );
}
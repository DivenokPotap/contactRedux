import { useSelector } from "react-redux"
import { Contact } from "../Contact/Contact";
import { statusFilters } from "../../redux/constance"
import css from "./ContactList.module.css"

const getVisibleContacts = (contacts, filter) => {
    switch (filter) {
      case statusFilters.unchecked:
        return contacts.filter(contact => !contact.checked);
  
      case statusFilters.checked:
        return contacts.filter(contact => contact.checked);
  
      default:
        return contacts;
    }
  };

export const ContactList = () => {
    const contacts = useSelector(state=>state.contacts)
    const filter = useSelector(state => state.filters.status)
    const visibleContacts = getVisibleContacts(contacts,filter)
    return (
        <ul className={css.list}>
            {visibleContacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            ))}
        </ul>
    )
}
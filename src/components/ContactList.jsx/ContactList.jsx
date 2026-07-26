import { useSelector } from "react-redux"
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"
import { selectVisibleAdapterContacts } from "../../redux/contactsSlice";
import { selectIsLoading } from "../../redux/selectors";
export const ContactList = () => {
    const { contacts, filters } = useSelector(selectVisibleAdapterContacts);
    const isLoading = useSelector(selectIsLoading);
    return (
     <div>
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            ))}
        </ul>

         {contacts.length === 0 && !isLoading && <p>Контакт не знайдено</p>}

      {contacts.length === 0 && (
        <p>
          Контакт за пошуком: <b>{filters}</b> не знайдений
        </p>
      )}
      </div>
    )
}
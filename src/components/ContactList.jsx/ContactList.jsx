import { useSelector } from "react-redux"
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"
import { selectVisibleAdapterContacts } from "../../redux/contactsSlice";
import { selectIsLoading } from "../../redux/selectors";
export const ContactList = () => {
    const { contacts, filters } = useSelector(selectVisibleAdapterContacts);
    const isLoading = useSelector(selectIsLoading);
    return (
     <div className={css.wrap}>
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            ))}
        </ul>

        <div className={css.check}>{contacts.length === 0 && !isLoading && <p>Контакти не знайдено</p>}

      {contacts.length === 0 && filters.length !== 0 && (
        <p>
          Контакт за пошуком: <b>{filters}</b> не знайдений
        </p>
          )}
        </div> 
      </div>
    )
}
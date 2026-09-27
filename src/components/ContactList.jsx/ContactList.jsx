import { useSelector } from "react-redux"
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useFetchContactsQuery } from "../../redux/Contacts/contactsApi";
import { selectFilters } from "../../redux/selectors";
export const ContactList = () => {
     const { data: contacts = [], isLoading } = useFetchContactsQuery();
  const filters = useSelector(selectFilters);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
    return (
     <div className={css.wrap}>
        <ul className={css.list}>
            {visibleContacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            ))}
        </ul>

        <div className={css.check}>{visibleContacts.length === 0 && !isLoading && <p>Контакти не знайдено</p>}

      {visibleContacts.length === 0 && filters.length !== 0 && (
        <p>
          Контакт за пошуком: <b>{filters}</b> не знайдений
        </p>
          )}
        </div> 
      </div>
    )
}
import { ContactBar } from '../ContactApp/ContactApp';
import { ContactForm } from '../ContactForm/ContactForm'
import { ContactList } from '../ContactList.jsx/ContactList'
const Contacts = () => {
    return (
        <div>
            <ContactBar />
            <ContactForm />
            <ContactList />
        </div>
    )
};

export default Contacts;
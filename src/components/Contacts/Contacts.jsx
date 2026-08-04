import { useDispatch } from 'react-redux';
import { ContactBar } from '../ContactApp/ContactApp';
import { ContactForm } from '../ContactForm/ContactForm'
import { ContactList } from '../ContactList.jsx/ContactList'
import { fetchContacts } from '../../redux/contactOperations';
import { useEffect } from 'react';
export const Contacts = () => {
      const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    return (
        <div>
            <ContactBar />
            <ContactForm />
            <ContactList />
        </div>
    )
};
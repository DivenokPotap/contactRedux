import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ContactBar } from './components/ContactApp/ContactApp'
import { ContactForm } from './components/ContactForm/ContactForm'
import { ContactList } from './components/ContactList.jsx/ContactList'
import { fetchContacts } from "./redux/contactOperations";

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactBar/>
      <ContactForm/>
      <ContactList/>
    </div>
  )
}

export default App;
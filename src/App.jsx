import './App.css'
import { ContactBar } from './components/ContactApp/ContactApp'
import { ContactForm } from './components/ContactForm/ContactForm'
import { ContactList } from './components/ContactList.jsx/ContactList'

function App() {
  return (
    <div>
     <ContactBar/>
     <ContactForm/>
     <ContactList/>
    </div>
  )
}

export default App

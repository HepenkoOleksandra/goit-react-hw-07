import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import '../App.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
   
  return (
    <div className='container'>
      <h1 className='containerTitle'>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App
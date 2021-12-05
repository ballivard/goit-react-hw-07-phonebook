import './App.css';
import Filter from './Сomponents/Filter/Filter';
import ContactForm from './Сomponents/ContactForm/ContactForm';
import ContactList from './Сomponents/ContactList/ContactList';
import Container from './Сomponents/Container/Container';

export default function App() {
 
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList>
      </ContactList>
    </Container>
  );
};

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(()=>
    JSON.parse(localStorage.getItem('contacts')) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (setContacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContacts = contact => {
    if (
      contacts.some(
        contactItem =>
          contactItem.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`Oops, ${contact.name} is already in contacts!`);
      return;
    }

    setContacts([...contacts, { ...contact, id: nanoid() }]);
  };

  const handleDeleteContacts = event => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== event.target.id)
    );
  };

  const handleFilterContacts = ({ target: { value } }) => {
    setFilter(value);
  };

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase())
    );

  const filterContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter onFilterChange={handleFilterContacts} value={filter} />
          <ContactList
            contacts={filterContacts}
            onButtonDelete={handleDeleteContacts}
          />
        </>
      ) : (
        <p>The Phonebook is empty. Please add a new contact.</p>
      )}
    </div>
  );
}


import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts') ?? [])
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function checkIsAlreadyInContacts(nameValue) {
    return contacts.map(({ name }) => name).includes(nameValue);
  }

  function getFiltredContacts(filter) {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.includes(filter.toLowerCase())
    );
  }

  const handleSubmit = (e, { nameValue, numberValue }) => {
    e.preventDefault();

    const id = nanoid();
    const isAlreadyInContacts = checkIsAlreadyInContacts(nameValue);

    if (isAlreadyInContacts) {
      alert(`${nameValue} is already in contacts`);
      return;
    }

    setContacts(prevState => [
      ...prevState,
      { id: id, name: nameValue, number: numberValue },
    ]);
  };

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    setFilter(filterValue);
  };

  const handleDeleteContact = _id => {
    setContacts(prevState => prevState.filter(({ id }) => id !== _id));
  };

  let filtredContacts;

  if (filter !== '') {
    filtredContacts = getFiltredContacts(filter);
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} value={filter} />
      <ContactList
        contacts={filtredContacts || contacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

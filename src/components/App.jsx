import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  constructor() {
    super();
    this.contacts = [];
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  checkIsAlreadyInContacts(nameValue) {
    return this.state.contacts.map(({ name }) => name).includes(nameValue);
  }

  getFiltredContacts(contacts, filter) {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.includes(filter.toLowerCase())
    );
  }

  handleSubmit = (e, { nameValue, numberValue }) => {
    e.preventDefault();

    const id = nanoid();
    const isAlreadyInContacts = this.checkIsAlreadyInContacts(nameValue);

    if (isAlreadyInContacts) {
      alert(`${nameValue} is already in contacts`);
      return;
    }

    this.setState(
      prevState => ({
        contacts: [
          ...prevState.contacts,
          { id: id, name: nameValue, number: numberValue },
        ],
      }),
      () => {
        this.contacts = this.state.contacts;
      }
    );
  };

  handleFilterChange = e => {
    const filterValue = e.target.value;
    this.setState({ filter: filterValue });
  };

  handleDeleteContact = _id => {
    this.setState(
      prevState => ({
        contacts: prevState.contacts.filter(({ id }) => id !== _id),
      }),
      () => {
        this.contacts = this.state.contacts;
      }
    );
  };
 
  render() {
    const { contacts, filter } = this.state;
    let filtredContacts;

    if (filter !== '') {
      filtredContacts = this.getFiltredContacts(contacts, filter);
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
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter
          handleFilterChange={this.handleFilterChange}
          value={this.state.filter}
        />
        <ContactList
          contacts={filtredContacts || contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

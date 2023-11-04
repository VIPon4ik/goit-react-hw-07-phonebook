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

  handleSubmit = (e, { nameValue, numberValue }) => {
    e.preventDefault();

    const id = nanoid();

    if (this.state.contacts.map(({ name }) => name).includes(nameValue)) {
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
    this.setState({ contacts: this.contacts });

    const filterValue = e.target.value.toLowerCase();

    this.setState({
      filter: filterValue,
      contacts: this.contacts.filter(({ name, number }) => {
        return name.toLowerCase().includes(filterValue) || number.includes(filterValue);
      }),
    });
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
    const { contacts } = this.state;
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
          contacts={contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

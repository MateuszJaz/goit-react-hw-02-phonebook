import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactListItem from './ContactList/ContactListItem';
import style from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Memory Five', number: '555-555-555' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.setState(
      prevState => ({
        contacts: prevState.contacts.concat([
          { id: nanoid(), name: name, number: number },
        ]),
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  addContact = ({ name, number }) => {
    const toLowerCase = name.toLowerCase();
    const contacts = this.state.contacts;
    let nameOntheList = false;

    const newContact = { id: nanoid(), name: name, number: number };

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === toLowerCase) {
        alert(`${contact.name} is already in contacts`);
        nameOntheList = true;
      }
    });

    if (nameOntheList) return;

    this.setState(prevState => ({
      contacts: prevState.contacts.concat(newContact),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number
          .replace(/-|\s/g, '')
          .includes(filter.replace(/-|\s/g, ''))
    );
  };

  deleteContact = idToDelete => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idToDelete),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactList>
          <ContactListItem
            contacts={this.filteredContacts()}
            handleDelete={this.deleteContact}
          />
        </ContactList>
      </div>
    );
  }
}

export default App;

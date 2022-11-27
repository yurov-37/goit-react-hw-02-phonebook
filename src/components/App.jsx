import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import GlobalStyles from './GlobalStyles';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {
  Phonebook,
  MainTitle,
  ContactTitle,
  TotalContactText,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  contactFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

    return (
      <Phonebook>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.addContact} />
        <ContactTitle>Contacts</ContactTitle>
        {contacts.length > 0 && (
          <>
            <TotalContactText>
              Total contacts: {contacts.length}
            </TotalContactText>
            <Filter value={filter} onChange={this.contactFilter} />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </>
        )}
        <GlobalStyles />
      </Phonebook>
    );
  }
}

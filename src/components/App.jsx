import React, { Component } from 'react';
import Sections from './Sections/Sections';
import { Phonebook } from './Form/Phonebook';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };
  handleDeleteUser = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };
  getFilteredContacts = () => {
    return this.state.contacts.filter(elem =>
      elem.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  onChangeName = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };

  render() {
    return (
      <Sections title={'Phonebook'}>
        <Phonebook
          phoneSubmit={this.handleSubmit}
          onChangeName={this.onChangeName}
          contacts={this.getFilteredContacts()}
          delete={this.handleDeleteUser}
        />
      </Sections>
    );
  }
}

export default App;
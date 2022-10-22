import { Component } from 'react';
import s from './phonebook.module.css';
export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeName = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handelSubmit = event => {
    event.preventDefault();
    this.props.phoneSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.handelSubmit}>
          <label className={s.label} htmlFor="input">Name</label>
          <input className={s.input}
            value={this.state.name}
            onChange={this.onChangeName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label className={s.label} htmlFor="input">Number</label>
          <input className={s.input}
            value={this.state.number}
            onChange={this.onChangeName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button className={s.btnAdd} type="submit">Add contact</button>
        </form>
        
        <h2 className={s.contactsTitle}>Contacts</h2>
        <label  className={s.label} htmlFor="input">Find contacts by name</label>
        <input className={s.input}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.onChangeName}
        />
        {/* <ul className={s.contactsList}>
          {this.props.contacts.map(contact => (
            <li className={s.contactsItem} key={contact.id}>
              <p className={s.contactsName}>{contact.name} : <span className={s.contactsNumber}>{contact.number}</span></p>
              <button className={s.btnDelete} onClick={() => this.props.delete(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}
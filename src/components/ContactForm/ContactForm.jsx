import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  id = nanoid();

  render() {
    return (
      <>
        <form className={style.form} onSubmit={this.props.onSubmit}>
          <label htmlFor={this.id}>
            Name
            <input
              className={style.formInput}
              autoComplete="off"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.props.handleInputChange}
              placeholder="e.g. John Doe"
              required
            />
          </label>
          <label htmlFor={this.id}>
            Number
            <input
              className={style.formInput}
              autoComplete="off"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.handleInputChange}
              placeholder="e.g. 123-456-789"
              required
            />
          </label>
          <button className={style.formBtn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;

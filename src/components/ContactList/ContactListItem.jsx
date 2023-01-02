import PropTypes from 'prop-types';
import style from './Contacts.module.css';

const ContactListItem = ({ contacts, handleDelete }) =>
  contacts.map(({ id, name, number }) => (
    <li className={style.contactsItem} key={id}>
      {name}: {number}
      <button
        className={style.contactBtn} //
        type="submit"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  ));

export default ContactListItem;

ContactListItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

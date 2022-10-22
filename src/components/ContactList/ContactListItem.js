import s from './contactList.module.css';


export const ContactListItem = ({ id, name, number, onDelete}) => {
  return (
    <li className={s.contactsItem} key={id}>
              <p className={s.contactsName}>{name} : <span className={s.contactsNumber}>{number}</span></p>
              <button className={s.btnDelete} onClick={() => onDelete(id)}>
                Delete
              </button>
            </li>
  );
};

export default ContactListItem
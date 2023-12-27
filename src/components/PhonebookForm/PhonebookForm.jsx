import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PhonebookForm.module.scss';
import { selectContacts } from 'store/contacts/selectors';
import { addContactThunk } from 'store/contacts/thunks';

const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const createContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    const isNumber = Number(number);

    if (!isNumber) return Notiflix.Notify.warning('Incorrect number!');

    const isNew = contacts.every(contact => {
      const chName = contact.name.toLowerCase();
      const lowName = name.toLowerCase();
      const chNumber = contact.number;

      if (chName === lowName) return false;
      if (chNumber === number) return false;
      return true;
    });

    if (!isNew)
      return Notiflix.Notify.warning('This contact is already exist!');

    form.reset();

    const newContact = {
      name,
      number,
    };

    dispatch(addContactThunk(newContact));
  };

  return (
    <form className={styles.contactsForm} onSubmit={createContact}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required autoComplete="name" />
      <label htmlFor="number">Number</label>
      <input type="tel" name="number" id="number" required autoComplete="tel" />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default PhonebookForm;

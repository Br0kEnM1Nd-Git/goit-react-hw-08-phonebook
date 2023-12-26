import { useDispatch } from 'react-redux';
import { addContactThunk } from 'store/contacts/contactsSlice';
import styles from './PhonebookForm.module.scss';

const PhonebookForm = () => {
  const dispatch = useDispatch();

  const createContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

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

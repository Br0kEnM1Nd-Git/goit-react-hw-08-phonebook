import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { selectContacts } from 'store/selectors';
import { addContactThunk } from 'store/contactsSlice';
import styles from './PhonebookForm.module.scss';

const PhonebookForm = () => {
  const { contacts } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const createContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.number.value;
    const phoneClear = phone.replace(/[\s-]+/g, '');

    if (phoneClear.length >= 15)
      return Notiflix.Notify.warning(`Phone number is too big!`);

    const isNew = contacts.every(el => {
      if (el.phone === phone) return false;
      return true;
    });

    if (!isNew)
      return Notiflix.Notify.warning(
        `This phone number is already in contacts!`
      );

    const isNumber = Number(phoneClear);
    if (!isNumber) return Notiflix.Notify.warning(`Enter correct number!`);

    form.reset();

    const newContact = {
      name,
      phone,
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

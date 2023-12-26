import PhonebookFilter from 'components/PhonebookList/PhonebookFilter';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllContactsThunk } from 'store/contacts/contactsSlice';
import { changeFilterAction } from 'store/filter/filterSlice';
import { selectIsLoggedIn } from 'store/selectors';

import styles from './Contacts.module.scss';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      dispatch(changeFilterAction(''));
      dispatch(getAllContactsThunk());
    }
  }, [dispatch, isLoggedIn, navigate]);

  return (
    <div>
      <div className={styles.formContainer}>
        <h2>Add Contact</h2>
        <PhonebookForm />
      </div>
      <div className={styles.contactsContainer}>
        <PhonebookFilter />
        <PhonebookList />
      </div>
    </div>
  );
};

export default Contacts;

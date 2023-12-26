import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'store/filter/filterSlice';
import styles from './Home.module.scss';
import { useEffect } from 'react';
import { getAllContactsThunk } from 'store/contacts/contactsSlice';
import { selectIsLoggedIn } from 'store/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(changeFilterAction(''));
      dispatch(getAllContactsThunk());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.formContainer}>
        <h2>Add Contact</h2>
        <PhonebookForm />
      </div>
      <div className={styles.contactsContainer}>
        <PhonebookList recent />
      </div>
    </div>
  );
};

export default Home;

import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import { useDispatch } from 'react-redux';
import { changeFilterAction } from 'store/filterSlice';
import styles from './Home.module.scss';
import { useEffect } from 'react';
import { getAllContactsThunk } from 'store/contactsSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilterAction(''));
    dispatch(getAllContactsThunk());
  }, [dispatch]);

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

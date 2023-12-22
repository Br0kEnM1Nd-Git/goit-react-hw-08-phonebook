import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import { useDispatch } from 'react-redux';
import { changeFilterAction } from 'store/filterSlice';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  dispatch(changeFilterAction(''));

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

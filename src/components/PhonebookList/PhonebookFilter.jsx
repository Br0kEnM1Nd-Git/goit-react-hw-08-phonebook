import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { changeFilterAction } from 'store/filter/filterSlice';
import styles from './PhonebookList.module.scss';

const PhonebookFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(changeFilterAction(value));
  };

  return (
    <form className={styles.filterForm}>
      <label htmlFor="filter">Find contacts:</label>
      <input
        type="text"
        name="filter"
        id="filter"
        onChange={debounce(e => handleChange(e), 200)}
        autoComplete="off"
      />
    </form>
  );
};

export default PhonebookFilter;

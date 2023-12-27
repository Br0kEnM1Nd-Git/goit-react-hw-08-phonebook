import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import styles from './PhonebookList.module.scss';
import { changeFilterAction } from 'store/filter/filterSlice';

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

import PhonebookFilter from 'components/PhonebookList/PhonebookFilter';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import { useDispatch } from 'react-redux';
import { changeFilterAction } from 'store/filterSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  dispatch(changeFilterAction(''));
  return (
    <div>
      <PhonebookFilter />
      <PhonebookList />
    </div>
  );
};

export default Contacts;

import PhonebookFilter from 'components/PhonebookList/PhonebookFilter';
import { PhonebookList } from 'components/PhonebookList/PhonebookList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContactsThunk } from 'store/contactsSlice';
import { changeFilterAction } from 'store/filterSlice';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilterAction(''));
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <PhonebookFilter />
      <PhonebookList />
    </div>
  );
};

export default Contacts;

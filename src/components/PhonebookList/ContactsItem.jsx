import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/contactsSlice';

const ContactsItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const deleteContact = () => dispatch(deleteContactThunk(id));

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button onClick={deleteContact}>Delete</button>
    </li>
  );
};

export default ContactsItem;

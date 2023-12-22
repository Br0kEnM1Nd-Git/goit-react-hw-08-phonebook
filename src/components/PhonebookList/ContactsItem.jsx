import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/contactsSlice';

const ContactsItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const deleteContact = () => dispatch(deleteContactThunk(id));

  return (
    <li>
      <span>
        {name}: {phone}
      </span>
      <button onClick={deleteContact}>Delete</button>
    </li>
  );
};

export default ContactsItem;

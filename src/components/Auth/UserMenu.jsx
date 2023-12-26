import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogOutThunk } from 'store/auth/authSlice';
import { selectUser } from 'store/selectors';

const UserMenu = () => {
  const { email } = useSelector(selectUser) ?? {};
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuth = () => {
    email && dispatch(userLogOutThunk());
    navigate('/');
  };

  return (
    <div>
      <p>{email}</p>
      <button onClick={handleAuth}>Logout</button>
    </div>
  );
};

export default UserMenu;

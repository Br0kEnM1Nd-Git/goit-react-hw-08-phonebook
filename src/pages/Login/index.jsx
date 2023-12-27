import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from 'components/Auth/LoginForm';
import { selectIsLoggedIn } from 'store/auth/selectors';

const Login = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn, navigate]);

  return <LoginForm />;
};

export default Login;

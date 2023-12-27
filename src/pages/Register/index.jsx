import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterForm from 'components/Auth/RegisterForm';
import { selectIsLoggedIn } from 'store/auth/selectors';

const Register = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn, navigate]);

  return <RegisterForm />;
};

export default Register;

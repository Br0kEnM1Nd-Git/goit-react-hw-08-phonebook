import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogInThunk } from 'store/auth/authSlice';
import styles from './AuthForm.module.scss';

const LoginForm = () => {
  const dispatch = useDispatch();

  const createContact = e => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;

    const isValidEmail = Boolean(email.split('@')[1] && email.split('.')[1]);
    if (!isValidEmail)
      return Notiflix.Notify.failure('Incorrect Email address!');

    form.reset();

    const userData = {
      email,
      password,
    };

    dispatch(userLogInThunk(userData));
  };

  return (
    <>
      <form className={styles.authForm} onSubmit={createContact}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          email="email"
          id="email"
          required
          autoComplete="off"
        />
        <label htmlFor="password">Password</label>
        <input
          type="tel"
          name="password"
          id="password"
          required
          autoComplete="off"
        />
        <button type="submit">Login</button>
      </form>
      <Link to="register">Register</Link>
    </>
  );
};

export default LoginForm;

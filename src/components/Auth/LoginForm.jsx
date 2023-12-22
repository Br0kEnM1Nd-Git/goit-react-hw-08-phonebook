import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { userLogInThunk } from 'store/authSlice';

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
    <form className={''} onSubmit={createContact}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        email="email"
        id="email"
        required
        autoComplete="email"
      />
      <label htmlFor="password">Password</label>
      <input
        type="tel"
        name="password"
        id="password"
        required
        autoComplete="pass"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

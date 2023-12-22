import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { userSignUpThunk } from 'store/authSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const createContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;

    const isValidEmail = Boolean(email.split('@')[1] && email.split('.')[1]);
    if (!isValidEmail)
      return Notiflix.Notify.failure('Incorrect Email address!');

    form.reset();

    const newUser = {
      name,
      email,
      password,
    };

    dispatch(userSignUpThunk(newUser));
  };

  return (
    <form className={''} onSubmit={createContact}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required autoComplete="name" />
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

export default RegisterForm;

import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const AuthLayout = () => {
  return (
    <div className={styles.appWrapper}>
      <nav className={styles.navigation}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/contacts'}>Contacts</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default AuthLayout;

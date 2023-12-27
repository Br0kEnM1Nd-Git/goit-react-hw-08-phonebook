import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/Auth/UserMenu';
import styles from './Layout.module.scss';
import { selectIsLoggedIn } from 'store/auth/selectors';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.appWrapper}>
      <nav className={styles.navigation}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/contacts'}>Contacts</NavLink>
        {!isLoggedIn && <NavLink to={'/login'}>Login</NavLink>}
        {isLoggedIn && <UserMenu />}
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

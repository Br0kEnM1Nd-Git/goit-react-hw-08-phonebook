import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/selectors';
import UserMenu from 'components/Auth/UserMenu';

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

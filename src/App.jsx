import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from 'layout/AuthLayout';
import { selectToken } from 'store/selectors';
import { useSelector } from 'react-redux';
import api from 'api/api';

const Layout = lazy(() => import('./layout'));
const Home = lazy(() => import('./pages/Home'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Register'));

const App = () => {
  const token = useSelector(selectToken);

  useEffect(() => {
    api.setToken(token);
  }, [token]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
        <Route path="login/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Signup />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

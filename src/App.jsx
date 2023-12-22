import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { getAllContactsThunk } from 'store/contactsSlice';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./layout'));
const Home = lazy(() => import('./pages/Home'));
const Contacts = lazy(() => import('./pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

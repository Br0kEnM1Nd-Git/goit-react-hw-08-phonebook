import { useSelector } from 'react-redux';
import {
  selectErrorContacts,
  selectFilter,
  selectIsLoadingContacts,
  selectVisibleContacts,
} from 'store/selectors';
import styles from './PhonebookList.module.scss';
import visibleContactsMap from './visibleContactsMap';

export const PhonebookList = ({ recent = false }) => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoadingContacts);
  const error = useSelector(selectErrorContacts);
  return (
    <>
      {recent && !filter && <h2>Recent contacts</h2>}
      <ul className={styles.contactsList}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : filter ? (
          visibleContactsMap(visibleContacts)
        ) : (
          visibleContactsMap(visibleContacts, recent)
        )}
      </ul>
    </>
  );
};

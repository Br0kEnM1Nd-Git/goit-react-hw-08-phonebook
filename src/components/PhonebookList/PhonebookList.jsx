import { useSelector } from 'react-redux';
import styles from './PhonebookList.module.scss';
import visibleContactsMap from './visibleContactsMap';
import { selectVisibleContacts } from 'store/contacts/selectors';
import { selectFilter } from 'store/filter/selectors';
import { selectError, selectIsLoading } from 'store/rootReducers/selectors';

export const PhonebookList = ({ recent = false }) => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {recent && !filter && <h2>Recent contacts</h2>}
      <ul className={styles.contactsList}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : visibleContacts.length ? (
          filter ? (
            visibleContactsMap(visibleContacts)
          ) : (
            visibleContactsMap(visibleContacts, recent)
          )
        ) : (
          <p>No contacts yet.</p>
        )}
      </ul>
    </>
  );
};

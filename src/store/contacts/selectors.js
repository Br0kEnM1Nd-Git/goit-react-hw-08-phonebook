import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'store/filter/selectors';

const selectContacts = state => state.contacts;

const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ name, number }) => {
      if (filter) {
        return (
          name.toLowerCase().includes(filter.toLowerCase()) ||
          number.includes(filter)
        );
      }
      return true;
    })
);

export { selectContacts, selectVisibleContacts };

import { createSelector } from '@reduxjs/toolkit';

const selectFilter = state => state.filter;

const selectContacts = state => state.contacts;

const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  ({ contacts }, filter) =>
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

const selectIsLoadingContacts = state => state.api.isLoading;

const selectErrorContacts = state => state.api.error;

const selectToken = state => state.auth.isLoggedIn;

export {
  selectFilter,
  selectContacts,
  selectVisibleContacts,
  selectErrorContacts,
  selectIsLoadingContacts,
  selectToken,
};

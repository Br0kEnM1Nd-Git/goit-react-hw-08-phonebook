import ContactsItem from 'components/PhonebookList/ContactsItem';

const visibleContactsMap = (visibleContacts, recent = false) => {
  if (recent) {
    const sliceLength = visibleContacts.length - 5;
    const recentContacts = visibleContacts.slice(sliceLength);
    return recentContacts.map(contact => {
      return <ContactsItem contact={contact} key={contact.id} />;
    });
  }
  return visibleContacts.map(contact => {
    return <ContactsItem contact={contact} key={contact.id} />;
  });
};

export default visibleContactsMap;

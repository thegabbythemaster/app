import React, { createContext, useState, useRef } from 'react';

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const id = useRef(0);

  function addContact(contactInfo) {
    console.log(contactInfo);
    setContacts([...contacts, { contactInfo, id: String(id.current) }]);
    id.current++;
    console.log(contacts);
  }

  function deleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id === id));
  }

  return (
    <ContactContext.Provider value={{ addContact, contacts, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;

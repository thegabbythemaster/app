import React, { createContext, useState, useRef } from 'react';

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  function addContact(contactInfo, date) {
    setContacts([
      ...contacts,
      { contactInfo, id: String(Math.random()), date },
    ]);
  }

  function deleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  return (
    <ContactContext.Provider value={{ addContact, contacts, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;

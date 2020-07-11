import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    {
      id: '0',
      name: 'William',
      phoneNumber: '9124019367',
    },
  ]);

  function addContact(contactInfo) {
    setContacts({ ...contacts, contactInfo });
  }

  return (
    <ContactContext.Provider value={{ addContact, contacts }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;

import React, { useState, useEffect, useCallback } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  const [contactName, setContactName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);



  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!isDuplicate) {
      addContact(contactName, phoneNumber, email);
      setContactName("");
      setPhoneNumber("");
      setEmail("");
    }   

  }, [contactName, phoneNumber, email, isDuplicate, addContact]);

 //Check for duplicate contact names
 useEffect(() => {
    const duplicate = contacts?.some(contact => contact.name.toLowerCase() === contactName.toLowerCase());
    setIsDuplicate(duplicate);
  }, [contactName, contacts]);



  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={contactName}
          setName={setContactName}
          phone={phoneNumber}
          setPhone={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}        
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          tiles={contacts}
        />
      </section>
    </div>
  );
};

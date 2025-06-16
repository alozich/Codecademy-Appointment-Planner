import React from "react";

export const ContactPicker = React.memo(({contacts, setContact, value, name}) => {
  return (
    <div>
      <select
        onChange={(e) => setContact(e.target.value)}
        value={value}
        name={name}
   >
        <option value="">No Contact Selected</option>
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}

      </select>

      
    </div>
  );
});

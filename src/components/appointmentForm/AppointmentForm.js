import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Appointment Name" />
        <input 
          name="date" 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          min={getTodayString()} 
          required 
          placeholder="Date" />
        <input 
          name="time" 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          required 
          placeholder="Time" />
        <ContactPicker 
          value={contact} 
          setContact={setContact} 
          contacts={contacts} />
        <input type="submit" />
      </form>
    </div>

  );
};

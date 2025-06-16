import React, { useState, useCallback } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(name, contact, date, time);
    setName("");
    setContact("");
    setDate("");
    setTime("");
   
  }, [name, contact, date, time, addAppointment]);

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        name={name}
        contact={contact}
        contacts={contacts}
        date={date}
        time={time}
        setName={setName}
        setContact={setContact}
        setDate={setDate}
        setTime={setTime}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments}/>
      </section>
    </div>
  );
};
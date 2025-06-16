import React, {StrictMode, useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (contactName, phoneNumber, email) => {
    if (!contactName || !phoneNumber || !email) return; // Add validation
    setContacts(prevContacts => [
      ...prevContacts,
      { name: contactName, phone: phoneNumber, email: email }
    ])
  }

  const addAppointment = (patientName, contact, date, time) => {
    setAppointments(prevContacts => [
      ...prevContacts,
      { name: patientName, contact: contact, date: date, time: time }
    ])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={ contacts } addContact={ addContact }/> }  />
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={ contacts } appointments={appointments} addAppointment={addAppointment}/>}   />
    </Route>
  ));
  
  return (
    <StrictMode>
    <RouterProvider router={router}/>
    </StrictMode>
  );
}

export default App;

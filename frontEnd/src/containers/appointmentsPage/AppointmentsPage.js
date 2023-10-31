import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from "../../redux/appoinmentSlice";

export const AppointmentsPage = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);


  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAppointment({ name, contact, date, time }));
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          name={name}
          setTitle={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </>
  );
};

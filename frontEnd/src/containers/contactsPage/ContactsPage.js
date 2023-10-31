import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { addContact } from "../../redux/contactSlice";

export const ContactsPage = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  let isDuplicate;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
      dispatch(addContact({ name, phone, email }));
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    isDuplicate = contacts.some(contact => contact.name === name);
  }, [])


  return (
    <>
      <section>
        <h2>
          Add Contact
          {isDuplicate ? " - Name Already Exists" : ""}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </>
  );
};

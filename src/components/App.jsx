import ControlledForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { useState } from "react";
import initContactsList from "./../assets/contacts.json";
import { v4 as uuidv4 } from "uuid";

export default function App() {
    const [contactsList, setContactsList] = useState(initContactsList);

    const AdderContact = (data) => {
        const newContact = {
            id: uuidv4(),
            name: data.name,
            number: data.number,
        };
        setContactsList((prev) => [...prev, newContact]);
    };

    const deleteContact = (id) => {
        setContactsList((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <main>
            <ControlledForm adder={AdderContact} />
            <ContactList contacts={contactsList} remover={deleteContact} />
        </main>
    );
}

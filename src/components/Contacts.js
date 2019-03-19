import React, { Component, Fragment } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@email.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@email.com",
        phone: "333-333-3333"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@email.com",
        phone: "222-222-2222"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={() => this.deleteContact(contact.id)}
          />
        ))}
      </Fragment>
    );
  }
}

export default Contacts;

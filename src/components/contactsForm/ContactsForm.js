import React, { useState } from "react";
import { ContactsLabel } from "./ContactsFormStyled";

import { useDispatch, useSelector } from "react-redux";
import { addContactOperation } from "../../redux/contacts/contactsOperation";

import { getContactSelector } from "../../redux/contacts/contactsSelectors";

export default function ContactsForm() {
  const [name, setContactsName] = useState("");
  const [number, setContactsNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(getContactSelector);
  console.log(contacts);

  const checkDublicateName = name => {
    return contacts.some(contact => contact.name === name);
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    console.log(checkDublicateName(name));
    if (checkDublicateName(name)) {
      alert(`${name} already exist`);
      return;
    }
    dispatch(addContactOperation({ name, number }));
    setContactsName("");
    setContactsNumber("");
  };

  const onHandleChange = e => {
    const { name, value } = e.target;
    name === "name" && setContactsName(value);
    name === "number" && setContactsNumber(value);
    // this.setState({ [name]: value }); //___v [name] prihodit name i price
  };
  return (
    <form className="contactsForm" onSubmit={onHandleSubmit}>
      <ContactsLabel>
        Name
        <input
          type="text"
          onChange={onHandleChange}
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </ContactsLabel>
      <ContactsLabel>
        Number
        <input
          type="tel"
          onChange={onHandleChange}
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </ContactsLabel>
      <button className="addContact" type="submit">
        Add Contact
      </button>
    </form>
  );
}

// class ContactsForm extends Component {
//   // static propTypes = {
//   //     handleAdd: PropTypes.func.isRequired
//   // };
//   state = {
//     name: "",
//     number: ""
//   };

//   onHandleSubmit = e => {
//     e.preventDefault();
//     if (this.props.checkDublicateName(this.state.name)) {
//       alert(`${this.state.name} already exist`);
//       return;
//     }

//     this.props.addContact(this.state);

//     this.setState({
//       name: "",
//       number: ""
//     });
//   };
//   onHandleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value }); //___v [name] prihodit name i price
//   };

//   render() {
//     return (
//       <form className="contactsForm" onSubmit={this.onHandleSubmit}>
//         <ContactsLabel>
//           Name
//           <input
//             type="text"
//             onChange={this.onHandleChange}
//             value={this.state.name}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </ContactsLabel>
//         <ContactsLabel>
//           Number
//           <input
//             type="tel"
//             onChange={this.onHandleChange}
//             value={this.state.number}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//         </ContactsLabel>
//         <button className="addContact" type="submit">
//           Add Contact
//         </button>
//       </form>
//     );
//   }
// }

// ContactsForm.propTypes = {
//   onHandleSubmit: PropTypes.func,
//   name: PropTypes.string,
//   number: PropTypes.string
// }.isRequired;

// export default ContactsForm;

// import React, { useState } from "react";
// const initialState = {
//   name: "",
//   card: "",
//   q: "",
//   w: "",
//   e: "",
// };
// const SectionsDetails = () => {
//   const [state, setState] = useState(initialState);
//   const onHandleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prev) => ({ ...prev, [name]: value }));
//   };
//   const onHandleSubmit = (e) => {
//     e.preventDefault();
//     setState(initialState);
//   };
//   return (
//     <>
//       <h2>Details</h2>
//       <form onSubmit={onHandleSubmit}>
//         <input
//           type='text'
//           name='name'
//           value={state.name}
//           onChange={onHandleChange}
//         />
//         <input
//           type='text'
//           name='card'
//           value={state.card}
//           onChange={onHandleChange}
//         />
//         <input type='text' name='q' value={state.q} onChange={onHandleChange} />
//         <input type='text' name='w' value={state.w} onChange={onHandleChange} />
//         <input type='text' name='e' value={state.e} onChange={onHandleChange} />
//         <button type='submit'>Submit</button>
//       </form>
//     </>
//   );
// };
// export default SectionsDetails;

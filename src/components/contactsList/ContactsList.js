import React from "react";

import { StyledContactList } from "./StyledContactList";
import { getFilteringContacts } from "../../redux/contacts/contactsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactsOperation } from "../../redux/contacts/contactsOperation";

export default function ContactsForm() {
  const contacts = useSelector(getFilteringContacts);
  const dispatch = useDispatch();

  const onDeleteContact = async e => {
    const { id } = e.target;
    dispatch(deleteContactsOperation(id));
  };

  return (
    <StyledContactList>
      <div className="card">
        <ul className="contactItem">
          {contacts.map(contact => (
            <li className="contactLi" key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button type="button" onClick={onDeleteContact} id={contact.id}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </StyledContactList>
  );
}

// const ContactsList = ({ contacts, onDeleteContact }) => {
//   return (
//     <StyledContactList>
//       <div className="card">
//         <ul className="contactItem">
//           {contacts.map(contact => (
//             <li className="contactLi" key={contact.id}>
//               <p>{contact.name}</p>
//               <p>{contact.number}</p>
//               <button type="button" onClick={onDeleteContact} id={contact.id}>
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </StyledContactList>
//   );
// };

// ContactsList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired
//     })
//   )
// };
// export default ContactsList;

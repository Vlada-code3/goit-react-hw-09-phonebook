import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/contacts/contactsAction";
import { filterContactSelector } from "../../redux/contacts/contactsSelectors";
// import PropTypes from "prop-types";
import { StyledContactFilter } from "./ContactFilterStyled";

export default function ContactsFilter() {
  const filter = useSelector(filterContactSelector);
  const dispatch = useDispatch();

  const setFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  // getFilteredContacts = () => {
  //   console.log(this.props);
  //   return this.props.contacts.filter(contact => contact.name.toLowerCase().includes(this.props.filter.toLowerCase()));
  // };
  return (
    <StyledContactFilter>
      <label>
        Filter
        <input type="text" value={filter} onChange={setFilter} />
      </label>
    </StyledContactFilter>
  );
}

// const ContactsFilter = ({ filter, setFilter }) => {
//   return (
//     <StyledContactFilter>
//       <label>
//         Filter
//         <input type="text" value={filter} onChange={setFilter} />
//       </label>
//     </StyledContactFilter>
//   );
// };

// ContactsFilter.propTypes = {
//   filter: PropTypes.string,
//   setFilter: PropTypes.func
// }.isRequired;
// export default ContactsFilter;

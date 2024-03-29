import React, { Component } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
import Section from "./section/Section";
import { connect } from "react-redux";
import ContactsFilter from "./filter/ContactsFilter";
import { filterContacts } from "../redux/contacts/contactsAction";
import { addContactOperation, deleteContactsOperation, getAllContactsOperation } from "../redux/contacts/contactsOperation";
import {
  errorContactSelector,
  filterContactSelector,
  getContactSelector,
  getFilteringContacts,
  loaderContactSelector
} from "../redux/contacts/contactsSelectors";
import { ContactsBookContainer } from "./ContactsStyled";

class Contacts extends Component {
  state = {
    contacts: {
      items: [],
      filter: ""
    }
  };

  async componentDidMount() {
    this.props.getAllContactsOperation();
  }

  // addContact = async contact => {
  //   this.props.addContactOperation(contact);
  // };

  // onDeleteContact = async e => {
  //   const { id } = e.target;
  //   this.props.deleteContactsOperation(id);
  // };

  // checkDublicateName = name => {
  //   return this.props.contacts.some(contact => contact.name === name);
  // };

  // setFilter = e => {
  //   const { value } = e.target;
  //   this.props.filterContacts(value);
  // };

  // getFilteredContacts = () => {
  //   console.log(this.props);
  //   return this.props.contacts.filter(contact => contact.name.toLowerCase().includes(this.props.filter.toLowerCase()));
  // };

  render() {
    return (
      <>
        <ContactsBookContainer>
          {this.props.error && <h2>{this.props.error}</h2>}
          {this.props.isLoading && <h2>Loading....</h2>}
          <Section title="Phonebook">
            <ContactsForm />
          </Section>
        </ContactsBookContainer>
        <ContactsBookContainer>
          <Section title="Find contact by name">
            <ContactsFilter />
          </Section>
        </ContactsBookContainer>
        <ContactsBookContainer>
          <Section title="Contacts">
            <ContactsList />
          </Section>
        </ContactsBookContainer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: getContactSelector(state),
    filter: filterContactSelector(state),
    error: errorContactSelector(state),
    filterContacts: getFilteringContacts(state),
    isLoading: loaderContactSelector(state)
  };
};

const mapDispatchToProps = {
  getAllContactsOperation,
  addContactOperation,
  deleteContactsOperation,
  filterContacts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

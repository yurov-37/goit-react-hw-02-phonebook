import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import { List, ListItem, ListText } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListText>
            {name}: {number}
          </ListText>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;

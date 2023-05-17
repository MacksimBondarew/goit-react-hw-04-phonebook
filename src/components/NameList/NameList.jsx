import PropTypes from 'prop-types';
import { ContactsList, ContactItem } from './NameList.styled';
import ContactName from '../ContactName/ContactName';

const NameList = ({ contacts, deleteName, updateContact }) => {
    return (
        <ContactsList>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <ContactName
                        id={id}
                        name={name}
                        number={number}
                        deleteName={deleteName}
                        updateContact={updateContact}
                    />
                </ContactItem>
            ))}
        </ContactsList>
    );
};

NameList.propTypes = {
    deleteName: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default NameList;

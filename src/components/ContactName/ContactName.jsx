import { useState } from 'react';
import {
    ContactNameSpan,
    ContactNumberSpan,
    RemoveContact,
} from '../NameList/NameList.styled';
import PropTypes from 'prop-types';

const ContactName = ({ id, name, number, deleteName, updateContact }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [contactName, setContactName] = useState(name);
    const [phone, setPhone] = useState(number);
    const editContact = () => {
        setIsEdit(prevState => !prevState);
        if (isEdit) {
            const contact = {
                id,
                name: contactName,
                number: phone,
            };
            updateContact(contact);
        }
    };
    const handleChange = (evt) => {
        const { name, value } = evt.currentTarget;
        switch (name) {
            case 'contactName':
                setContactName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                break;
        }
    };
    return (
        <>
            {isEdit ? (
                <>
                    <input type="text" value={contactName} name='contactName' onChange={handleChange} />
                    <input type="text" value={phone}  name='phone' onChange={handleChange}/>
                </>
            ) : (
                <>
                    <ContactNameSpan>{name}</ContactNameSpan>
                    <ContactNumberSpan>{number}</ContactNumberSpan>
                </>
            )}
            <RemoveContact type="button" onClick={() => deleteName(id)}>
                Видалити
            </RemoveContact>
            <RemoveContact type="button" onClick={editContact}>
                {isEdit ? "Зберегти контакт" : "Редагувати контакт"}
            </RemoveContact>
        </>
    );
};
ContactName.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactName;

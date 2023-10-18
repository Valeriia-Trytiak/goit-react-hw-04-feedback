import PropTypes from 'prop-types'; 
import { ImWarning } from 'react-icons/im';

import{ Message, Container } from "./Notification.styled"

export const Notification = ({ message })=> {
    return <Container><Message>{message}</Message>
    <ImWarning size='17px'/></Container>
}

Notification.prototype={
    message: PropTypes.string,  
}
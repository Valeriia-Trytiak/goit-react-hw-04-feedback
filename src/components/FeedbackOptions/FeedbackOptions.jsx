import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'; 

import { List, Button } from "./FeedbackOptions.styled"


export const FeedbackOptions  = ({ options, onLeaveFeedback })=> {
    
    return <List>
    {options.map((option) => (<li key={nanoid()}><Button type="button" onClick={(evt)=> onLeaveFeedback(evt.target.value)} value={option}>{option}</Button></li>))}
    </List>
    }


    FeedbackOptions.prototype={
    options: PropTypes.oneOf(['good', 'neutral', 'bad'])
    }
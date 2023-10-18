import PropTypes from 'prop-types'; 
import { Title, List } from "./Statistics.styled"

export const Statistics  = ({ good, neutral, bad, total, positivePercentage= 0 })=> {
  
    return <div>
    <Title>Statistics</Title>
    <List>
    <li><span>Good: {good}</span></li>
    <li><span>Neutral: {neutral}</span></li>
    <li><span>Bad: {bad}</span></li>
    <li><span>Total: {total}</span></li>
    <li><span>Positiv feedback {positivePercentage}%</span></li>
    </List>
    </div>
    }

    Statistics.prototype={
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
        total: PropTypes.number,
        positivePercentage:PropTypes.number,  
    }
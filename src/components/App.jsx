import { useState } from "react";
import PropTypes from 'prop-types'; 


import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import {Notification} from "./Notification/Notification";


export const App = ()=> {

  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0});  

   //Зміна стеку при натискані кпонок
   const handlerButtonTags= (option) => {
    setFeedback((prevState) => {
      return {
        ...prevState, [option]: prevState[option] + 1,
      };
  });
  }

   //Розрахунок загальної кількості відгуків
   const countTotalFeedback = ()=> {
    return Object.values(feedback).reduce((acc, value) => acc + value)
    }

     //Розрахунок відсотка позитивних відгуків
  const countPositiveFeedbackPercentage=()=>{
    const { good } = feedback;
    const total = countTotalFeedback();
    const percentage = total > 0 ? (good / total) * 100 : 0;

    return percentage.toFixed(0); 
  }

  const tags = Object.keys(feedback);
  const { good, neutral, bad } = feedback;

  return  <div>
  <Section title="Please leave feedback">
    <FeedbackOptions options={tags} onLeaveFeedback={handlerButtonTags} />
   { countTotalFeedback() ? 
  <Statistics 
  good={good} 
  neutral={neutral} 
  bad={bad} 
  total={countTotalFeedback()} 
  positivePercentage={countPositiveFeedbackPercentage()}/> :
  <Notification message="There is no feedback"/>}
  </Section>
</div> 
}


// export class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   //Зміна стеку при натискані кпонок
//   handlerButtonTags= (option) => {
//     this.setState((prevState) => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//   });
//   }

//   //Розрахунок загальної кількості відгуків
//   countTotalFeedback = ()=> {
//   return Object.values(this.state).reduce((acc, value) => acc + value)
//   }

//   //Розрахунок відсотка позитивних відгуків
//   countPositiveFeedbackPercentage=()=>{
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     const percentage = total > 0 ? (good / total) * 100 : 0;

//     return percentage.toFixed(0); 
//   }

//   render() {
//     const tags = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;

//     return <div>
//     <Section title="Please leave feedback">
//       <FeedbackOptions options={tags} onLeaveFeedback={this.handlerButtonTags} />
//      { this.countTotalFeedback() ? 
//     <Statistics 
//     good={good} 
//     neutral={neutral} 
//     bad={bad} 
//     total={this.countTotalFeedback()} 
//     positivePercentage={this.countPositiveFeedbackPercentage()}/> :
//     <Notification message="There is no feedback"/>}
//     </Section>
//   </div> 
//   }
// };

Section.prototype={
  title:PropTypes.string.isRequired,
}

FeedbackOptions.prototype={
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func
}

Statistics.prototype={
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage:PropTypes.number,  
}

Notification.prototype={
  message: PropTypes.string
}
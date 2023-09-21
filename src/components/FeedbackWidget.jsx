import React from 'react'
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

export default function FeedbackWidget({feedback, setFeedBack}) {

  const countTotalFeedback = () => {
    const points = Object.values(feedback);
    return points.reduce((accum, val) => accum + val);
  };

  const countPositiveFeedbackPercentage = () => {
    const div = countTotalFeedback();
    return div? Math.round((feedback.Good/div) * 100) : 0;
  };


  return (
    <div>
      <FeedbackOptions options={feedback} onLeaveFeedback={setFeedBack} />
      <h2>Statistics</h2>
      {countTotalFeedback() > 0? <Statistics 
          good={feedback.Good} 
          neutral={feedback.Neutral} 
          bad={feedback.Bad} 
          total={countTotalFeedback()} 
          positivePercentage={countPositiveFeedbackPercentage()}/>: <p>No feedback given</p>
      }
    </div>
  )
}

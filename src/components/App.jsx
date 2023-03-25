import { createContext, useState } from 'react';

import { Statistics } from './statistics/satistics';
import { FeedbackOptions } from './feedback/feedbackOptions';
import './feedback/feedback.css';

export const FeedbackContext = createContext();

export const App = () => {
  const initialState = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  const [feedback, setFeedback] = useState(initialState);

  const increseFeedback = ev => {
    let parametr = ev.target.name;
    if (parametr !== undefined) {
      const newState = { ...feedback };
      newState[parametr]++;
      setFeedback({ ...newState });
    }
  };

  const calulateNewTotal = () => {
    return feedback.good + feedback.bad + feedback.neutral;
  };

  const calculateNewPercantage = total => {
    const percentage = (Number(feedback.good) / Number(total)) * 100;
    return Math.round(percentage);
  };

  const total = calulateNewTotal();
  const percentage = calculateNewPercantage(total);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackContext.Provider
        value={{ ...feedback, total, percentage, increseFeedback }}
      >
        <FeedbackOptions />
        <Statistics />
      </FeedbackContext.Provider>
    </div>
  );
};

import PropTypes from 'prop-types';
import { useContext } from 'react';

import { FeedbackContext } from 'components/App';

export const Statistics = () => {
  const feedbackList = useContext(FeedbackContext);

  const { good, bad, neutral, total, percentage } = feedbackList;

  if (total === 0) {
    return (
      <section className="parag-wrap">
        <p>There is no feedback</p>
      </section>
    );
  }

  return (
    <section className="parag-wrap">
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Total: {total}</p>
      <p>Percentage: {percentage}%</p>
    </section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  percentage: PropTypes.number,
  total: PropTypes.number,
};

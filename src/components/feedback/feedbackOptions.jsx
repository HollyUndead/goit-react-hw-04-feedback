import PropTypes from 'prop-types';

import { FeedbackContext } from 'components/App';
import { useContext } from 'react';

export const FeedbackOptions = () => {
  const func = useContext(FeedbackContext);
  const { increseFeedback } = func;
  return (
    <div className="button-wrap" onClick={increseFeedback}>
      <button name="good">Good</button>
      <button name="bad">Bad</button>
      <button name="neutral">Neutral</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  increseFeedback: PropTypes.func,
};

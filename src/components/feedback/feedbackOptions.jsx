import PropTypes from 'prop-types';

export const FeedbackOptions = ({ ...props }) => {
  const { increseFeedback } = props;
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

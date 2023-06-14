import PropTypes from 'prop-types';

import {
  FeedbackOptionsStyled,
  FeedbackButtonsStyled,
} from 'components/styled/FeedbackStyled.styled';

export const FeedbackOptions = ({ countTotalFeedback, state }) => {
  return (
    <FeedbackOptionsStyled>
      <FeedbackButtonsStyled>
        {state.map(el => {
          return (
            <button
              key={el}
              type="button"
              name={el}
              onClick={countTotalFeedback}
            >
              {el}
            </button>
          );
        })}
      </FeedbackButtonsStyled>
    </FeedbackOptionsStyled>
  );
};
FeedbackOptions.propTypes = {
  countTotalFeedback: PropTypes.func.isRequired,
  state: PropTypes.arrayOf(PropTypes.string).isRequired,
};

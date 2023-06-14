import PropTypes from 'prop-types';

import {
  StatisticsStyled,
  StatisticsDataStyled,
  StatisticsParagraphStyled,
} from 'components/styled/StatisticsStyled.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  countPositiveFeedbackPercentage,
  total,
}) => {
  return (
    <StatisticsStyled>
      <StatisticsDataStyled>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <StatisticsParagraphStyled count={countPositiveFeedbackPercentage()}>
          Positive feedback: {countPositiveFeedbackPercentage()}%
        </StatisticsParagraphStyled>
      </StatisticsDataStyled>
    </StatisticsStyled>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

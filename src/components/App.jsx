import { useState } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const countFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };
  const countPositiveFeedbackPercentage = () => {
    return good + bad + neutral
      ? Math.round((good / (good + bad + neutral)) * 100)
      : 0;
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  return (
    <div>
      <Section title={'Please leave Feedback'}>
        <FeedbackOptions
          countTotalFeedback={countFeedback}
          state={['good', 'bad', 'neutral']}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

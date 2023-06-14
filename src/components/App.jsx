import React from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };
  countPositiveFeedbackPercentage = () => {
    return this.state.good /
      (this.state.good + this.state.bad + this.state.neutral)
      ? Math.round(
          (this.state.good /
            (this.state.good + this.state.bad + this.state.neutral)) *
            100
        )
      : 0;
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  render() {
    return (
      <div>
        <Section title={'Please leave Feedback'}>
          <FeedbackOptions
            countTotalFeedback={this.countFeedback}
            state={Object.keys(this.state)}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

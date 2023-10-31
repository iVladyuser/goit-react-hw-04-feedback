import { Component } from 'react';
import { Feedbackoptions, Section, Statistics, Notification } from 'components';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedBack = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    const percent = (positive / total) * 100;
    return percent.toFixed();
    // const total = this.countTotalFeedback();
    //     return Math.round(this.state.good * 100 / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedbackoptions
            options={Object.keys(this.state)}
            onLeaveFeedBack={this.onLeaveFeedBack}
          />
        </Section>
        {totalFeedback ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default App;

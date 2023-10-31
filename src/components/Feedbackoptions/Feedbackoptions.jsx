import React from 'react';
import css from './Feedbackoptions.module.css';

// class Feedbackoptions extends Component {
//   state = {};

//   handleIncrement=()=> {}
//   render() {
//     return (
//       <div className={css.containerFeedback}>
//         <button className={css.buttonGood} type="button">
//           Good
//         </button>
//         <button
//           className={css.buttonNeutral}
//           type="button"
//           onClick={this.handleIncrement}
//         >
//           Neutral
//         </button>
//         <button className={css.buttonFeedbackBad} type="button">
//           Bad
//         </button>
//       </div>
//     );
//   }
// }

// export default Feedbackoptions;

const Feedbackoptions = ({ options, onLeaveFeedBack }) => {
  return (
    <div className={css.containerFeedback}>
      {options.map(option => (
        <button key={option} className={css.buttonFeedback} type="button"
        onClick={()=> {onLeaveFeedBack(option)}}>
          {option}
        </button>
      ))}
      {/* <button className={css.buttonFeedback} type="button">
          Good
        </button>
        <button className={css.buttonFeedback} type="button">
          Neutral
        </button>
        <button className={css.buttonFeedback} type="button">
          Bad
        </button> */}
    </div>
  );
};

export default Feedbackoptions;

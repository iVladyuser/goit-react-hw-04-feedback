import React from 'react';
import css from './Feedbackoptions.module.css';



const Feedbackoptions = ({ options, onLeaveFeedBack }) => {
  return (
    <div className={css.containerFeedback}>
      {options.map(option => (
        <button key={option} className={css.buttonFeedback} type="button"
        onClick={()=> {onLeaveFeedBack(option)}}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Feedbackoptions;

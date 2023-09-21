import React from 'react'
import { PropTypes } from "prop-types";
import {ReviewBtn} from '../styles/Styles';

export default function FeedbackOptions({options, onLeaveFeedback}) {
    
    const handleClick = (event) => {
        let review = event.target.id;
        onLeaveFeedback({...options, [review]: options[review] + 1});
    
    };

    return (
    <div>
        <h1>Please leave FeedBack</h1>
        <ReviewBtn onClick={handleClick} id='Good'>Good</ReviewBtn>
        <ReviewBtn onClick={handleClick} id='Neutral'>Neutral</ReviewBtn>
        <ReviewBtn onClick={handleClick} id='Bad'>Bad</ReviewBtn>
    </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.object
};
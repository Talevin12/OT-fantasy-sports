import React from 'react';
import './roundTitle.css';

import LeftArrowIcon from '../../assets/arrow-left.svg';
import RightArrowIcon from '../../assets/arrow-right.svg'

const RoundTitle = ({ roundNumber, onBackClick, onForwardClick }) => {
    return (
        <div className="round-title">
            <button className="arrow-button" onClick={onBackClick}>
                <img src={LeftArrowIcon} alt="arrow left" />
            </button>
            <span className="title-text">Matchweek {roundNumber}</span>
            <button className="arrow-button" onClick={onForwardClick}>
                <img src={RightArrowIcon} alt="arrow right" />
            </button>
        </div>
    );
};

export default RoundTitle;
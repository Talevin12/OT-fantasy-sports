import React from 'react';
import './roundTitle.css';

const RoundTitle = ({ roundNumber, onBackClick, onForwardClick }) => {
    return (
        <div className="round-title">
            <button className="arrow-button" onClick={onBackClick}>
                <i className="fa-solid fa-caret-left"></i>
            </button>
            <span className="title-text">Matchweek {roundNumber}</span>
            <button className="arrow-button" onClick={onForwardClick}>
                <i className="fa-solid fa-caret-right"></i>
            </button>
        </div>
    );
};

export default RoundTitle;
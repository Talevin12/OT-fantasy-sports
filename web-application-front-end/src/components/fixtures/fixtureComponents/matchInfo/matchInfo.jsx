import React from 'react';
import './matchInfo.css';
import StadiumIcon from '../../../../assets/stadium.svg';
import WhistleIcon from '../../../../assets/whistle.svg';

const MatchInfo = ({ date, time, referee, stadium, location, isExpanded }) => {
    return (
        <div className={`match-info ${isExpanded ? 'expanded' : ''}`}>
            <div className="info-group">
                <div className="info-icon"><i className="fas fa-calendar-alt"></i></div>
                <div className="info-value">{date}</div>
            </div>
            <div className="info-group">
                <div className="info-icon"><i className="fas fa-clock"></i></div>
                <div className="info-value">{time}</div>
            </div>
            <div className="info-group">
                <div className="info-icon"> <img src={WhistleIcon} alt="Whistle" height="24" width="24" /></div>
                <div className="info-value">{referee}</div>
            </div>
            <div className="info-group">
                <div className="info-icon"> <img src={StadiumIcon} alt="Stadium" height="24" width="24" /></div>
                <div className="info-value">{stadium}</div>
            </div>
            <div className="info-group">
                <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="info-value">{location}</div>
            </div>
        </div>
    );
};

export default MatchInfo;
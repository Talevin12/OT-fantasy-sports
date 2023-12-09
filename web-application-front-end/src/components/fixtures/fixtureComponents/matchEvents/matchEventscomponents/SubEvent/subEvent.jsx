import React from 'react';
import './subEvent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const SubEvent = ({ minute, extra, inPlayer, outPlayer, isHomeTeam }) => {
    const teamClass = isHomeTeam ? 'home-team' : 'away-team';

    return (
        <div className={`sub-event ${teamClass}`}>
            <div className="event-top-line"></div>
            <div className="event-details">
                {isHomeTeam ? (
                    <>
                        <div className={`event-player-names ${teamClass}`}>
                            <div className='name-and-arrow'>
                                <div className="in-player">{inPlayer}</div>
                                <FontAwesomeIcon icon={faArrowUp} style={{ color: "#00c000", }} />
                            </div>
                            <div className='name-and-arrow'>
                                <div className="out-player">{outPlayer}</div>
                                <FontAwesomeIcon icon={faArrowDown} style={{ color: "#ff0000", }} />
                            </div>
                        </div>
                        <div className="event-icon">
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </div>
                        <div className="event-time">
                            <div className="event-minute">{minute}'</div>
                            {extra ? <div className="event-extra">+{extra}</div> : ''}
                        </div>


                        <div className="event-icon invisible">
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </div>
                        <div className={`event-player-names ${teamClass} invisible`}>
                            <div className='name-and-arrow'>
                                <div className="in-player">{inPlayer}</div>
                                <FontAwesomeIcon icon={faArrowUp} style={{ color: "#00c000", }} />
                            </div>
                            <div className='name-and-arrow'>
                                <div className="out-player">{outPlayer}</div>
                                <FontAwesomeIcon icon={faArrowDown} style={{ color: "#ff0000", }} />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={`event-player-names ${teamClass} invisible`}>
                            <div className='name-and-arrow'>
                                <FontAwesomeIcon icon={faArrowUp} style={{ color: "#00c000", }} />
                                <div className="in-player">{inPlayer}</div>
                            </div>
                            <div className='name-and-arrow'>
                                <FontAwesomeIcon icon={faArrowDown} style={{ color: "#ff0000", }} />
                                <div className="out-player">{outPlayer}</div>
                            </div>
                        </div>
                        <div className="event-icon invisible">
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </div>


                        <div className="event-time">
                            <div className="event-minute">{minute}'</div>
                            {extra ? <div className="event-extra">+{extra}</div> : ''}
                        </div>
                        <div className="event-icon">
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </div>
                        <div className={`event-player-names ${teamClass}`}>
                            <div className='name-and-arrow'>
                                <FontAwesomeIcon icon={faArrowUp} style={{ color: "#00c000", }} />
                                <div className="in-player">{inPlayer}</div>
                            </div>
                            <div className='name-and-arrow'>
                                <FontAwesomeIcon icon={faArrowDown} style={{ color: "#ff0000", }} />
                                <div className="out-player">{outPlayer}</div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default SubEvent;

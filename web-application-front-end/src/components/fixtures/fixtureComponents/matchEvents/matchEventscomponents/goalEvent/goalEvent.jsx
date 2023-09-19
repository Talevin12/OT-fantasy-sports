import React from 'react';
import './goalEvent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const GoalEvent = ({ minute, extra, goalScorer, assistMaker, isHomeTeam }) => {
    // Conditionally apply a CSS class based on the team type (home or away)
    const teamClass = isHomeTeam ? 'home-team' : 'away-team';

    return (
        <div className={`goal-event ${teamClass}`}>
            <div className="event-top-line"></div>
            <div className="event-details">
                {isHomeTeam ? (
                    <>
                        <div className={`event-player-names ${teamClass}`}>
                            <div className="goal-scorer">
                                <span className="bold">{goalScorer}</span>
                            </div>
                            {assistMaker && (
                                <div className="assist-maker">{assistMaker}</div>
                            )}
                        </div>
                        <div className="event-icon">
                            <FontAwesomeIcon icon={faFutbol} />
                        </div>
                        <div className="event-time">
                            <div className="event-minute">{minute}'</div>
                            {extra ? <div className="event-extra">+{extra}</div> : ''}
                        </div>


                        <div className="event-icon invisible">
                            <FontAwesomeIcon icon={faFutbol} />
                        </div>
                        <div className={`event-player-names invisible ${teamClass}`}>
                            <div className="goal-scorer">
                                <span className="bold">{goalScorer}</span>
                            </div>
                            {assistMaker && (
                                <div className="assist-maker">{assistMaker}</div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <div className={`event-player-names invisible ${teamClass}`}>
                            <div className="goal-scorer">
                                <span className="bold">{goalScorer}</span>
                            </div>
                            {assistMaker && (
                                <div className="assist-maker">{assistMaker}</div>
                            )}
                        </div>
                        <div className="event-icon invisible">
                            <FontAwesomeIcon icon={faFutbol} />
                        </div>


                        <div className="event-time">
                            <div className="event-minute">{minute}'</div>
                            {extra ? <div className="event-extra">+{extra}</div> : ''}
                        </div>
                        <div className="event-icon">
                            <FontAwesomeIcon icon={faFutbol} />
                        </div>
                        <div className={`event-player-names ${teamClass}`}>
                            <div className="goal-scorer">
                                <span className="bold">{goalScorer}</span>
                            </div>
                            {assistMaker && (
                                <div className="assist-maker">{assistMaker}</div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default GoalEvent;

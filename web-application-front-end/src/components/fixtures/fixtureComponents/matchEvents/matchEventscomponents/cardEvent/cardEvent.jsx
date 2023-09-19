import React from 'react';
import './cardEvent.css';
import YellowCard from "../../../../../../assets/yellow-card.svg"
import RedCard from "../../../../../../assets/red-card.svg"

const CardEvent = ({ minute, extra, player, isYellow, isHomeTeam }) => {
    const teamClass = isHomeTeam ? 'home-team' : 'away-team';

    return (
        <div className={`card-event ${teamClass}`}>
            <div className="event-top-line"></div>
            <div className="event-details">
                {isHomeTeam ? (
                    <>
                        <div className={`event-player-name ${teamClass}`}>
                            <div className="card-player">{player}</div>
                        </div>
                        <div className="event-icon">
                            {isYellow ?
                                <img src={YellowCard} alt='red card' />
                                :
                                <img src={RedCard} alt='red card' />
                            }
                        </div>
                        <div className="event-time">
                            <div className="event-minute">{minute}'</div>
                            {extra ? <div className="event-extra">+{extra}</div> : ''}
                        </div>


                        <div className="event-icon invisible">
                            {isYellow ?
                                <img src={YellowCard} alt='red card' />
                                :
                                <img src={RedCard} alt='red card' />
                            }
                        </div>
                        <div className={`event-player-name invisible ${teamClass}`}>
                            <div className="card-player">{player}</div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={`event-player-name invisible ${teamClass}`}>
                            <div className="card-player">{player}</div>
                        </div>
                        <div className="event-icon invisible">
                            {isYellow ?
                                <img src={YellowCard} alt='red card' />
                                :
                                <img src={RedCard} alt='red card' />
                            }
                        </div>


                        <div className="event-time">
                            <div className="event-minute">{minute}'</div>
                            {extra ? <div className="event-extra">+{extra}</div> : ''}
                        </div>
                        <div className="event-icon">
                            {isYellow ?
                                <img src={YellowCard} alt='red card' />
                                :
                                <img src={RedCard} alt='red card' />
                            }
                        </div>
                        <div className={`event-player-name ${teamClass}`}>
                            <div className="card-player">{player}</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CardEvent;

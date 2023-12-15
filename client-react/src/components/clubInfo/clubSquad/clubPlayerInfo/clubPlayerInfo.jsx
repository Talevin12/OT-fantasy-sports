import React from 'react';
import './clubPlayerInfo.css';

const ClubPlayerInfo = ({
    clubColor,
    photo,
    firstName,
    lastName,
    age,
    number,
    position,
    nationality,
    appearances,
    rating,
    saves,
    goalsConceded,
    goals,
    assists
}) => {

    const statStyle = {
        background: `linear-gradient(315deg, ${clubColor}, #fff 40%)`
    };

    const statTextStyle = {
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
    };

    return (
        <div className="club-player-info-container" style={{ background: `linear-gradient(135deg, ${clubColor}, #fff 30%)` }}>
            <div className="club-player-header">
                <img src={photo} alt={lastName} className="club-player-photo" />
                <div className="club-player-details">
                    <p className="club-player-first-name">{firstName}</p>
                    <h1 className="club-player-last-name">{lastName}</h1>
                    <p className="club-player-subtitle"> Age: {age} | {nationality} </p>
                    {/* <p className="club-player-subtitle"> {nationality} </p> */}
                    <p className="club-player-position">#{number} | {position}</p>
                </div>
            </div>

            <div className='club-player-stats'>
                <div className="club-player-stats-grid" >
                    <div className="club-player-stat" style={statStyle}>
                        <p className="club-player-stat-label" style={statTextStyle}> Appearances</p>
                        <p className="club-player-stat-value" style={statTextStyle}>{appearances ? appearances : 0}</p>
                    </div>
                    <div className="club-player-stat" style={statStyle}>
                        <p className="club-player-stat-label" style={statTextStyle}>Rating</p>
                        <p className="club-player-stat-value" style={statTextStyle}>{rating ?
                            Math.round(rating * 10) / 10 : 'N/A'}</p>
                    </div>
                    {position === 'Goalkeeper' ? (
                        <>
                            <div className="club-player-stat" style={statStyle}>
                                <p className="club-player-stat-label" style={statTextStyle}>Saves</p>
                                <p className="club-player-stat-value" style={statTextStyle}>{saves ? saves : 0}</p>
                            </div>
                            <div className="club-player-stat" style={statStyle}>
                                <p className="club-player-stat-label" style={statTextStyle}>Goals Conceded</p>
                                <p className="club-player-stat-value" style={statTextStyle}>{goalsConceded ? goalsConceded : 0}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="club-player-stat" style={statStyle}>
                                <p className="club-player-stat-label" style={statTextStyle}>Goals</p>
                                <p className="club-player-stat-value" style={statTextStyle}>{goals ? goals : 0}</p>
                            </div>
                            <div className="club-player-stat" style={statStyle}>
                                <p className="club-player-stat-label" style={statTextStyle}>Assists</p>
                                <p className="club-player-stat-value" style={statTextStyle}>{assists ? assists : 0}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div >
    );
};

export default ClubPlayerInfo;

import React from 'react';
import './clubInfoBar.css';

const ClubInfoBar = ({ clubName, foundedYear, stadium, city, stadiumCapacity, logoUrl, primaryColor, secondaryColor }) => {
    const infoBarStyle = {
        background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
        fontFamily: 'Oswald , sans-serif'
    };

    const textStyle = {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    };

    return (
        <div className="club-info-bar" style={infoBarStyle}>
            <div className="club-info-logo">
                <img src={logoUrl} alt={`${clubName} Logo`} />
            </div>
            <div className="club-info-details">
                <h1 className="club-info-name" style={textStyle}>{clubName}</h1>
                <p className="club-info-stadium" style={textStyle}>{`${stadium}, ${city} (Capacity: ${stadiumCapacity})`}</p>
                <p className='club-info-founded-year' style={textStyle}>{`Founded: ${foundedYear}`}</p>
            </div>
        </div>
    );
};

export default ClubInfoBar;

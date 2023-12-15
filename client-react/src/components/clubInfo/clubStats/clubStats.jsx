import React from "react";
import "./clubStats.css";

const ClubStats = ({ stats, clubColor }) => {

    const statStyle = {
        background: `linear-gradient(135deg, ${clubColor}, #fff 40%)`
    };

    const statBubbles = Object.keys(stats).map((stat) => {
        return (
            <div
                key={stat}
                className={'stat-bubble'}
                style={statStyle}
            >
                <span className="stat-label">{stat}</span>
                <span className="stat-value">{stats[stat]}</span>
            </div>
        );
    });

    return (
        <div className="club-stats">
            <div className="header">
                <h1 className="club-name">{stats.clubName}</h1>
                <h2 className="season">{stats.season}</h2>
            </div>
            <div className="stats">
                <div className="stat-selector">
                    {statBubbles}
                </div>
            </div>
        </div>
    );
};

export default ClubStats;

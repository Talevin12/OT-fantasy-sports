import React, { useRef } from 'react';
import './listOfFixtures.css';
import Fixture from './fixture';

const ListOfFixtures = ({ fixtures, standings }) => {
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const timeOptions = { hour: 'numeric', minute: '2-digit' }

    const scrollContainer = useRef(null);

    const scroll = (scrollOffset) => {
        scrollContainer.current.scrollBy({
            top: 0,
            left: scrollOffset,
            behavior: 'smooth'
        });
    };

    let records = {};
    for (let rank in standings) {
        const team = standings[rank]
        records[team.team.name] = team.all.win + " - " + team.all.draw + " - " + team.all.lose;
    }

    return (
        <div className="fixtures-container">
            <button className="scroll-button" onClick={() => scroll(-600)}>❮</button>
            <div className="horizontal-list" ref={scrollContainer}>
                {fixtures.map((item, index) => (
                    <div className="list-item" key={index}>
                        <Fixture
                            homeTeam={item.teams.home.name}
                            awayTeam={item.teams.away.name}
                            date={new Date(item.fixture.date).toLocaleDateString("en-US", dateOptions)}
                            time={new Date(item.fixture.date).toLocaleTimeString("en-US", timeOptions)}
                            referee={item.fixture.referee}
                            stadium={item.fixture.venue.name}
                            location={item.fixture.venue.city}
                            homeTeamLogo={item.teams.home.logo}
                            awayTeamLogo={item.teams.away.logo}
                            homeTeamRecord={records[item.teams.home.name]}
                            awayTeamRecord={records[item.teams.away.name]} />
                    </div>
                ))}
            </div>
            <button className="scroll-button" onClick={() => scroll(600)}>❯</button>
        </div>
    );
};

export default ListOfFixtures;

import React, { useState, useEffect, useRef } from 'react';
import './listOfFixtures.css';
import Fixture from '../futureFixtures/futureFixture';
import FixtureResult from '../results/fixtureResult';

const compareFixturesByDateAndStatus = (fixtureA, fixtureB) => {
    if (!fixtureA.fixture.date || !fixtureB.fixture.date) {
        if (!fixtureA.fixture.date) {
            return 1;
        }

        return -1;
    }

    const fixtureAStatusShort = fixtureA.fixture.status.short;
    const fixtureBStatusShort = fixtureB.fixture.status.short;

    if (fixtureAStatusShort === fixtureBStatusShort) {
        return new Date(fixtureA.fixture.date) - new Date(fixtureB.fixture.date);
    }

    const liveFixtureStatusShorts = ["1H", "HT", "2H", "ET", "BT", "P"];

    if (liveFixtureStatusShorts.includes(fixtureAStatusShort) && !liveFixtureStatusShorts.includes(fixtureBStatusShort)) {
        return -1;
    }

    if (liveFixtureStatusShorts.includes(fixtureBStatusShort) && !liveFixtureStatusShorts.includes(fixtureAStatusShort)) {
        return 1;
    }

    return new Date(fixtureA.fixture.date) - new Date(fixtureB.fixture.date);
}

const ListOfFixtures = ({ fixtures, standings, fixturesExtended, currentRound = null }) => {
    let [fixturesSorted, setFixtureSorted] = useState(fixtures.sort(compareFixturesByDateAndStatus))
    let [fixturesExtendedSorted, setFixturesExtendedSorted] = useState(fixturesExtended.sort(compareFixturesByDateAndStatus))

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const timeOptions = { hour: 'numeric', minute: '2-digit' }

    const scrollContainer = useRef(null);
    const itemRef = useRef();

    const scroll = (scrollOffset) => {
        scrollContainer.current.scrollBy({
            top: 0,
            left: scrollOffset,
            behavior: 'smooth'
        });
    };

    const scrollCurrentRoundToCenter = () => {
        if (itemRef.current) {
            itemRef.current.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
    }

    let records = {};
    for (let rank in standings) {
        const team = standings[rank]
        records[team.team.name] = team.all.win + " - " + team.all.draw + " - " + team.all.lose;
    }

    useEffect(() => {
        setFixtureSorted(fixtures.sort(compareFixturesByDateAndStatus))
        setFixturesExtendedSorted(fixturesExtended.sort(compareFixturesByDateAndStatus))
    }, [fixtures, fixturesExtended])

    useEffect(() => {
        scrollCurrentRoundToCenter();
    }, []);

    return (
        <div className='fixtures-container'>
            <div className="fixtures-list-container">
                <button className="scroll-button" onClick={() => scroll(-1000)}>❮</button>
                <div className="horizontal-list" ref={scrollContainer}>
                    {fixturesSorted.map((item, index) =>
                    (
                        <div className="list-item" key={index}
                            ref={currentRound && item.league.round.split(" - ")[1] === currentRound.split(" - ")[1] ? itemRef : null}>
                            {item.fixture.status.short === "NS" ?
                                <Fixture
                                    round={item.league.round.split(" - ")[1]}
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
                                :
                                < FixtureResult
                                    round={item.league.round.split(" - ")[1]}
                                    homeTeam={item.teams.home.name}
                                    awayTeam={item.teams.away.name}
                                    homeTeamScore={item.goals.home}
                                    awayTeamScore={item.goals.away}
                                    status={item.fixture.status.short}
                                    gameMinute={item.fixture.status.elapsed}
                                    date={new Date(item.fixture.date).toLocaleDateString("en-US", dateOptions)}
                                    time={new Date(item.fixture.date).toLocaleTimeString("en-US", timeOptions)}
                                    referee={item.fixture.referee}
                                    stadium={item.fixture.venue.name}
                                    location={item.fixture.venue.city}
                                    homeTeamLogo={item.teams.home.logo}
                                    awayTeamLogo={item.teams.away.logo}
                                    homeTeamRecord={records[item.teams.home.name]}
                                    awayTeamRecord={records[item.teams.away.name]}
                                    teamsStats={fixturesExtendedSorted[index].statistics}
                                    teamsEvents={fixturesExtendedSorted[index].events}
                                    teamsLineups={fixturesExtendedSorted[index].lineups}
                                    playersStats={fixturesExtendedSorted[index].players}
                                />
                            }
                        </div>
                    ))}
                </div>
                <button className="scroll-button" onClick={() => scroll(1000)}>❯</button>
            </div>
        </div>
    );
};

export default ListOfFixtures;

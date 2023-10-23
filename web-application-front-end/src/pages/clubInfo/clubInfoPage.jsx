import React from 'react';
import './clubInfoPage.css'

import TopBar from "../../components/topBar/topBar";
import PremierLeagueNavBar from "../../components/leagueNavBar/premierLeagueNavBar";
// import NBANavBar from "../../components/leagueNavBar/NBANavBar";

import ClubInfoBar from '../../components/clubInfo/clubInfoBar/clubInfoBar';
import ClubSquad from '../../components/clubInfo/clubSquad/clubSquad';
import ClubStats from '../../components/clubInfo/clubStats/clubStats';
import ListOfFixtures from '../../components/fixtures/listOfFixtures/listOfFixtures'

import ClubInfoData from '../../Data/clubInfo.json'
import ClubSquadData from '../../Data/clubSquad.json'
import ClubSquadExtendedData from '../../Data/clubSquadExtended.json'
import ClubSeasonStats from '../../Data/clubSeasonStats.json'
import ClubFixtures from '../../Data/clubFixtures.json'
import ClubFixturesExtended from '../../Data/clubFixturesExtended.json'
import Standings from '../../Data/standing.json'
import currentRound from "../../Data/currentRound.json"
import clubsColors from '../../assets/colorsTeams.json'
import { useState } from 'react';



const ClubInfoPage = ({ clubId }) => {
    const [currentLeague, setCurrentLeague] = useState("PremierLeague");

    const clubInfoDataTeam = ClubInfoData.response[0].team;
    const clubInfoDataVenue = ClubInfoData.response[0].venue;

    const clubSeasonStatsResponse = ClubSeasonStats.response

    const clubStats = {
        'Games': clubSeasonStatsResponse.fixtures.played.total,
        'Wins': clubSeasonStatsResponse.fixtures.wins.total,
        'Draws': clubSeasonStatsResponse.fixtures.draws.total,
        'Losses': clubSeasonStatsResponse.fixtures.loses.total,
        'Goals': clubSeasonStatsResponse.goals.for.total.total,
        'Goals Conceded': clubSeasonStatsResponse.goals.against.total.total,
        'Biggest Wins Streak': clubSeasonStatsResponse.biggest.streak.wins,
        'Clean Sheets': clubSeasonStatsResponse.clean_sheet.total,
    };

    const [activeComponent, setActiveComponent] = useState('Stats');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Squad':
                return <ClubSquad
                    clubColor={clubsColors[clubInfoDataTeam.name].homeColor}
                    ClubSquad={ClubSquadData.response[0].players}
                    clubSquadExtended={ClubSquadExtendedData.response} />;
            case 'Stats':
                return <ClubStats
                    stats={clubStats}
                    clubColor={clubsColors[clubInfoDataTeam.name].homeColor} />;
            case 'Fixtures':
                return <div className='club-fixtures'>
                    <ListOfFixtures
                        fixtures={ClubFixtures.response}
                        standings={Standings.response[0].league.standings[0]}
                        fixturesExtended={ClubFixturesExtended.response}
                        currentRound={currentRound.response[0]} />
                </div>;
            default:
                return null;
        }
    };

    return (
        <>
            <TopBar currentLeague={currentLeague} /*onLeagueChange={setCurrentLeague}*/ />
            <PremierLeagueNavBar />
            {/* {currentLeague === "PremierLeague" ? <PremierLeagueNavBar /> : <NBANavBar />} */}

            <div className='club-info-container'>
                <ClubInfoBar clubName={clubInfoDataTeam.name} foundedYear={clubInfoDataTeam.founded}
                    logoUrl={clubInfoDataTeam.logo}
                    stadium={clubInfoDataVenue.name} city={clubInfoDataVenue.city} stadiumCapacity={clubInfoDataVenue.capacity}
                    primaryColor={clubsColors[clubInfoDataTeam.name].homeColor} secondaryColor={clubsColors[clubInfoDataTeam.name].awayColor} />

                <div className="nav-bar">
                    <button className={`nav-button ${activeComponent === 'Stats' ? 'active' : ''}`}
                        onClick={() => setActiveComponent('Stats')}>Stats</button>
                    <button className={`nav-button ${activeComponent === 'Squad' ? 'active' : ''}`}
                        onClick={() => setActiveComponent('Squad')}>Squad</button>
                    <button className={`nav-button ${activeComponent === 'Fixtures' ? 'active' : ''}`}
                        onClick={() => setActiveComponent('Fixtures')}> Fixtures</button >
                </div >

                {renderComponent()}

                {/* <ClubSquad clubColor={clubsColors[clubInfoDataTeam.name].homeColor} ClubSquad={ClubSquadData.response[0].players} clubSquadExtended={ClubSquadExtendedData.response} />

            <ClubStats stats={clubStats} clubColor={clubsColors[clubInfoDataTeam.name].homeColor} />

            <div className='club-fixtures'>
                <ListOfFixtures fixtures={ClubFixtures.response}
                    standings={Standings.response[0].league.standings[0]}
                    fixturesExtended={ClubFixturesExtended.response}
                    currentRound={currentRound.response[0]} />
            </div> */}
            </div >
        </>
    )
};

export default ClubInfoPage;
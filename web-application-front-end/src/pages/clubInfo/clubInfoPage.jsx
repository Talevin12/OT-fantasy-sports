import React from 'react';
import ClubInfoBar from '../../components/clubInfo/clubInfoBar/clubInfoBar';
import ClubSquad from '../../components/clubInfo/clubSquad/clubSquad';
import ClubStats from '../../components/clubInfo/clubStats/clubStats';

import ClubInfoData from '../../Data/clubInfo.json'
import ClubSquadData from '../../Data/clubSquad.json'
import ClubSquadExtendedData from '../../Data/clubSquadExtended.json'
import clubsColors from '../../assets/colorsTeams.json'



const ClubInfoPage = ({ clubId }) => {
    const clubInfoDataTeam = ClubInfoData.response[0].team;
    const clubInfoDataVenue = ClubInfoData.response[0].venue;

    const clubStats = {
        'Games': 38,
        'Wins': 28,
        'Draws': 8,
        'Losses': 2,
        'Goals': 90,
        'Goals Conceded': 22,
        'Assists': 300,
        'Clean Sheets': 16,
    };

    return (
        <>
            <ClubInfoBar clubName={clubInfoDataTeam.name} foundedYear={clubInfoDataTeam.founded}
                logoUrl={clubInfoDataTeam.logo}
                stadium={clubInfoDataVenue.name} city={clubInfoDataVenue.city} stadiumCapacity={clubInfoDataVenue.capacity}
                primaryColor={clubsColors[clubInfoDataTeam.name].homeColor} secondaryColor={clubsColors[clubInfoDataTeam.name].awayColor} />

            <ClubSquad clubColor={clubsColors[clubInfoDataTeam.name].homeColor} ClubSquad={ClubSquadData.response[0].players} clubSquadExtended={ClubSquadExtendedData.response} />

            <ClubStats stats={clubStats} clubColor={clubsColors[clubInfoDataTeam.name].homeColor} />
        </>
    )
};

export default ClubInfoPage;
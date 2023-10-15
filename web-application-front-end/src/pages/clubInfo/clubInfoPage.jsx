import React from 'react';
import ClubInfoBar from '../../components/clubInfo/clubSquad/clubInfoBar/clubInfoBar';
import ClubSquad from '../../components/clubInfo/clubSquad/clubSquad';

import ClubInfoData from '../../Data/clubInfo.json'
import ClubSquadData from '../../Data/clubSquad.json'
import ClubSquadExtendedData from '../../Data/clubSquadExtended.json'
import clubsColors from '../../assets/colorsTeams.json'



const ClubInfoPage = ({ clubId }) => {
    const clubInfoDataTeam = ClubInfoData.response[0].team;
    const clubInfoDataVenue = ClubInfoData.response[0].venue;

    return (
        <>
            <ClubInfoBar clubName={clubInfoDataTeam.name} foundedYear={clubInfoDataTeam.founded}
                logoUrl={clubInfoDataTeam.logo}
                stadium={clubInfoDataVenue.name} city={clubInfoDataVenue.city} stadiumCapacity={clubInfoDataVenue.capacity}
                primaryColor={clubsColors[clubInfoDataTeam.name].homeColor} secondaryColor={clubsColors[clubInfoDataTeam.name].awayColor} />

            <ClubSquad clubColor={clubsColors[clubInfoDataTeam.name].homeColor} ClubSquad={ClubSquadData.response[0].players} clubSquadExtended={ClubSquadExtendedData.response} />
        </>
    )
};

export default ClubInfoPage;
import React from 'react';
import './matchEvents.css'
import GoalEvent from './matchEventscomponents/goalEvent/goalEvent';
import CardEvent from './matchEventscomponents/cardEvent/cardEvent';
import SubEvent from './matchEventscomponents/SubEvent/subEvent'

const MatchEvents = ({ events, homeTeam, homeTeamLogo, awayTeamLogo, isExpanded }) => {
    const events_sorted = events.sort((eventA, eventB) => {
        const timeA = eventA.time.elapsed + eventA.time.extra;
        const timeB = eventB.time.elapsed + eventB.time.extra;
        return timeA < timeB ? -1 : 1;
    });

    return (
        <>
            <div className={`match-events ${isExpanded ? 'expanded' : ''}`}>
                <div className="logos_row">
                    <div className="logo-container-events">
                        <img src={homeTeamLogo} alt="Team 1 logo" />
                    </div>
                    <div className="logo-container-events">
                        <img src={awayTeamLogo} alt="Team 2 logo" />
                    </div>
                </div>

                <hr className='separator-events' />

                <div className='list-of-events'>
                    {/* <div className='center-scroll-element' /> */}
                    {/* <div className='center-scroll-element2' /> */}
                    {events_sorted.map((event, index) => {
                        switch (event.type) {
                            case 'Goal':
                                return <GoalEvent minute={event.time.elapsed} extra={event.time.extra}
                                    goalScorer={event.player.name} assistMaker={event.assist.name}
                                    isHomeTeam={event.team.name === homeTeam} />;
                            case 'Card':
                                return <CardEvent minute={event.time.elapsed} extra={event.time.extra}
                                    player={event.player.name} isYellow={event.detail === "Yellow Card"}
                                    isHomeTeam={event.team.name === homeTeam} />;
                            case 'subst':
                                return <SubEvent minute={event.time.elapsed} extra={event.time.extra}
                                    inPlayer={event.player.name} outPlayer={event.assist.name}
                                    isHomeTeam={event.team.name === homeTeam} />;
                            default:
                                return null;
                        }
                    })}
                </div>
            </div>
        </>
    );
};

export default MatchEvents;
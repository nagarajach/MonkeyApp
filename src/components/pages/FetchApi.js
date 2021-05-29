import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import './Grid.css'

const FetchApi = () => {

    const [items, setItems] = useState([]);

    const apiGet = () => {
        fetch('https://api.footylogic.com/match/home/games?sortById=2&languageId=19&channelId=1&tzOffSet=330')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setItems(json.data);
        });
    }

    useEffect(() => {
       apiGet();
    }, [])
    
    return (
        <div>
            <h1>Fetch API</h1>
            {<button onClick={apiGet}>Fetch API</button>}
            <hr/>
            { /*<pre>{JSON.stringify(items, null, 2)}</pre>*/}
            <div className="container">
                <div className="row">
                    <div>
                        { items && items.map((data) => (
                        <div className='contentBg'>
                            <Table className='tableDefault'>
                                <thead>
                                <tr>
                                    <th> {data.label}</th>
                                    <th>Home Form</th>
                                    <th>&nbsp;</th>
                                    <th>Away Form</th>
                                    <th>Win Predictor(%)</th>
                                    <th>Best Bet</th>
                                </tr>
                                { data.events && data.events.map((event) => (
                                    <tr>
                                        <td> {event.kickOffDate} &nbsp;&nbsp; {event.kickOffTime}</td>
                                        <td> 
                                            <div className="team-lastForm">
                                               <span className="status win">{event.homeForm}</span> 
                                            </div>
                                        </td>
                                        <td> 
                                            <div className="table-fixture"></div>
                                            <div className="table-fixture"> 
                                                <div className="team-image">
                                                    <div className="homeTeam-name">
                                                        {event.homeTeamName}
                                                    </div>
                                                    <div className="team-vs">VS</div>
                                                    <div className=''>
                                                        <div className='awayTeam-name'>
                                                            {event.awayTeamName}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='team-lastForm'>
                                                <span className='status loss'>{event.awayForm}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='win-predictor'>
                                                <span className='percentage win'>{event.matchOutcome}</span>
                                            </div>
                                        </td>
                                        <td>{event.bestBetName}[{event.subMarketName}] - {event.outcomeName}</td>
                                    </tr>
                                ))}
                                </thead>
                            </Table>
                       </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FetchApi;

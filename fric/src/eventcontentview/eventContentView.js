// import * as React from 'react';
import React, {useState,useEffect} from 'react';
import GeneralView from '../generalView/generalView';
import '../assets/css/bootstrap.css';
import AddImage from '../assets/add.png';
import SortImage from '../assets/updownarrow.png';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

class eventContentView extends React.Component { 

    state = {
        events: []
    }

    componentDidMount(){
        fetch('/events')
        .then(res=> res.json())
        .then(eventList => {
            this.setState({events : eventList});
        });
    }


    
    render() {
        return (
            <div>
                <GeneralView/>        
                <body>
                    <input type="image" src={AddImage} />
                    <button type="button">Delete</button>
                    <button type="button">Save</button>
                    <button type="button">Cancel</button>
                    
                    {/* <ul>
                        {this.state.events.map((event) => (
                            <li key={event.Title}>{event.name}</li>
                        ))}
                     </ul> */}



                    <Table>
                        <tr>
                            <th></th>
                            <th>Event Name <input type="image" src={SortImage} /></th>
                            <th>No. of Systems <input type="image" src={SortImage} /></th>
                            <th>No. of Findings <input type="image" src={SortImage} /></th>
                            <th>Progress <input type="image" src={SortImage} /></th>
                        </tr>
                        <div>
                            
                            <tr>
                            {this.state.events.map((event) => (
                                <div>
                                <td><input type="checkbox" id="cb1" value="event" /> <Link to="/EventDetailed" >Select </Link></td>
                                <td>{event.name}</td>
                                <td>{event.num_sys}</td>
                                <td>{event.num_findings}</td>
                                <td>{event.prog}</td>
                                </div>
                            ))}
                            </tr>
                        </div>
                    

                    </Table>

                </body>
            </div>
        );
    }
}


export default eventContentView;



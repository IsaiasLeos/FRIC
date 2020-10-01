// // import * as React from 'react';
// import React, {useState,useEffect} from 'react';
// import GeneralView from '../generalView/generalView';
// import '../assets/css/bootstrap.css';
// import AddImage from '../assets/add.png';
// import SortImage from '../assets/updownarrow.png';
// import Table from 'react-bootstrap/Table';
// import { Link } from 'react-router-dom';

// import * as React from 'react'
// import {useState,useEffect}  from "react";
// import AddImage from '../assets/add.png'
// import SortImage from '../assets/updownarrow.png'
// import Table from 'react-bootstrap/Table'
// import Tree from '../eventTree/eventTree'
// import Button from 'react-bootstrap/Button'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import GeneralView from '../generalView/generalView'
// import Modal from 'react-bootstrap/Modal'
// import EventDetailedView from './eventDetailedView'
// class eventContentView extends React.Component { 

//     state = {
//         events: []
//     }

//     componentDidMount(){
//         fetch('/events')
//         .then(res=> res.json())
//         .then(eventList => {
//             this.setState({events : eventList});
//         });
//     }


    
//     render() {
//         return (
//             <div>
//                 <GeneralView/>        
//                 <body>
//                     <input type="image" src={AddImage} />
//                     <button type="button">Delete</button>
//                     <button type="button">Save</button>
//                     <button type="button">Cancel</button>
                    
//                     {/* <ul>
//                         {this.state.events.map((event) => (
//                             <li key={event.Title}>{event.name}</li>
//                         ))}
//                      </ul> */}



//                     <Table>
//                         <tr>
//                             <th></th>
//                             <th>Event Name <input type="image" src={SortImage} /></th>
//                             <th>No. of Systems <input type="image" src={SortImage} /></th>
//                             <th>No. of Findings <input type="image" src={SortImage} /></th>
//                             <th>Progress <input type="image" src={SortImage} /></th>
//                         </tr>
//                         <div>
                            
//                             <tr>
//                             {this.state.events.map((event) => (
//                                 <div>
//                                 <td><input type="checkbox" id="cb1" value="event" /> <Link to="/EventDetailed" >Select </Link></td>
//                                 <td>{event.name}</td>
//                                 <td>{event.num_sys}</td>
//                                 <td>{event.num_findings}</td>
//                                 <td>{event.prog}</td>
//                                 </div>
//                             ))}
//                             </tr>
//                         </div>
                    

//                     </Table>

//                 </body>
import * as React from 'react'
import {useState,useEffect}  from "react";
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import Table from 'react-bootstrap/Table'
import Tree from '../eventTree/eventTree'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import GeneralView from '../generalView/generalView'
import Modal from 'react-bootstrap/Modal'
import EventDetailedView from './eventDetailedView'


function EventContentView(){
    const [events,setEvents] = useState([])

    useEffect(() => {
        fetch('/events').then(
        response => response.json()).then(data => setEvents(data))
    },[]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        return (
            <div>
                <GeneralView/>
                <div class="main">
                    <div class="title-buttons">
                        <h2>Event Overview Table</h2>
                        <ButtonGroup>
                            <Button variant="dark">Archive</Button>
                            <input type="image" alt="sort button" src={AddImage} onClick={handleShow} />
                        </ButtonGroup>
                    </div>
                    <Table bordered striped hover>
                        <thead class = "thead-grey">
                            <tr>
                                <th>Select</th>
                                <th>Event Name <input type="image" alt="sort button" src={SortImage} className="sort-button" /></th>
                                <th>No. of Systems <input type="image"  alt="sort button" src={SortImage} className="sort-button" /></th>
                                <th>No. of Findings <input type="image" alt="sort button" src={SortImage} className="sort-button" /></th>
                                <th>Progress <input type="image" alt="sort button" src={SortImage} className="sort-button" /></th>
                            </tr>
                        </thead>
                        <tbody>
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
                        </tbody>
                    </Table>

                    <Modal show={show} onHide={handleClose}  dialogClassName="event-modal" size = "xl">
                        <Modal.Header closeButton>
                        <Modal.Title>
                            Event Detailed View
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EventDetailedView />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="dark" onClick={handleClose}>
                                Save
                            </Button>
                            <Button variant="dark" onClick={handleClose}>
                                Delete
                            </Button>
                            <Button variant="dark" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div class="right-tree">
                    <Tree />
                </div>
            </div>
        );
    
}


export default EventContentView;

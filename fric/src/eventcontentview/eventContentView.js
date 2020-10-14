import * as React from 'react'
import {useState,useEffect}  from "react";
import AddImage from '../assets/add.png';
import SortImage from '../assets/updownarrow.png';
import Table from 'react-bootstrap/Table';
import {useTable,useRowSelect} from "react-table";
import Tree from '../eventTree/eventTree';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import GeneralView from '../generalView/generalView';
import Modal from 'react-bootstrap/Modal';
import EventDetailedView from './eventDetailedView';
import Event from './EventTable'; 
import { Link } from 'react-router-dom';
import SelectEvent from './EventTable';


function EventContentView(){
    const [events,setEvents] = useState([{name: '', num_sys:'',num_findings:'',prog:''}]) 
    
    useEffect(() => {
        fetch('/eventsOverview').then(
        response => response.json()).then(data => setEvents(data)) // Get info for Event Overview Table // 
    },[]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false); // Close Modal View
    const handleShow = () => setShow(true); // Open Modal View 

    const [selected_event,selectEvent] = useState({name: '', num_sys:'',num_findings:'',prog:''}); // Set selected event 

    // After event is chosen make it the selected event and the show modal // 
    function viewEvent(event){ 
        selectEvent(event);
        handleShow();
    }

    // Before showing modal clear event so there is no prepopulated data // 
    function addEvent(){
        selectEvent(0);
        handleShow();
    }

        return (
            <div>
                <GeneralView/> {/* Tab Bar */ }
                <div class="main">
                    <div class="title-buttons">
                        <h2>Event Overview Table</h2>
                        <ButtonGroup>
                            <Button variant="dark">Archive</Button>
                            <input type="image" alt="sort button" src={AddImage} onClick={addEvent} />
                        </ButtonGroup>
                    </div>

                    <Table bordered striped hover id = "event_table">
                        <thead class = "thead-grey">
                            <tr>
                                <th>Select Event</th>
                                <th>Event Name <input type="image" alt="sort button" src={SortImage} className="sort-button" /></th>
                                <th>No. of Systems <input type="image"  alt="sort button" src={SortImage} className="sort-button" /></th>
                                <th>No. of Findings <input type="image" alt="sort button" src={SortImage} className="sort-button" /></th>
                                <th>Progress <input type="image" alt="sort button" src={SortImage} className="sort-button" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Populate event table*/ }
                                {events.map((event) => (
                                    <tr>
                                    <td><Button onClick ={() => {viewEvent(event)}}>Select</Button></td>
                                    <td>{event.name}</td>
                                    <td>{event.num_sys}</td>
                                    <td>{event.num_findings}</td>
                                    <td>{event.prog}</td>
                                    </tr>
                                    ))}
                        
                        </tbody>
                    </Table>
                    

                    <Modal show={show} onHide={handleClose}  dialogClassName="event-modal" size = "xl">
                        <Modal.Header closeButton>
                        <Modal.Title>
                            Event Detailed View {console.log("Here", selected_event)}
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EventDetailedView event = {selected_event} />
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

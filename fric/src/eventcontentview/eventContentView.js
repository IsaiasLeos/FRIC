import * as React from 'react'
import { useState, useEffect } from "react";
import SortImage from '../assets/updownarrow.png'
import Table from 'react-bootstrap/Table'
import Tree from '../eventTree/eventTree'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import GeneralView from '../generalView/generalView'
import Modal from 'react-bootstrap/Modal'
import EventDetailedView from './eventDetailedView'
import { Link } from 'react-router-dom';

function EventContentView() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('/events').then(
            response => response.json()).then(data => setEvents(data))
    }, []);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <GeneralView />
            <div class="main">
                <div class="title-buttons">
                    <h2>Event Overview Table</h2>
                    <ButtonGroup>
                        <Button variant="dark">Archive</Button>
                        <Button variant="dark" onClick={handleShow}>Add</Button>
                    </ButtonGroup>
                </div>
                <Table bordered striped hover>
                    <thead class="thead-grey">
                        <tr>
                            <th>Select</th>
                            <th>Event Name <input type="image" alt="sort button" src={SortImage} className="sort-button" /></th>
                            <th>No. of Systems <input type="image" alt="sort button" src={SortImage} className="sort-button" /></th>
                            <th>No. of Findings <input type="image" alt="sort button" src={SortImage} className="sort-button" /></th>
                            <th>Progress <input type="image" alt="sort button" src={SortImage} className="sort-button" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr>
                                <td><input type="checkbox" id="cb1" value="event" /> <Link to="/EventDetailed" ></Link></td>
                                <td><Button variant="outline-dark" onClick={handleShow}>{event.name}</Button></td>
                                <td>{event.num_sys}</td>
                                <td>{event.num_findings}</td>
                                <td>{event.prog}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Modal show={show} onHide={handleClose} dialogClassName="event-modal" size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h1>Event Detailed View</h1>
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

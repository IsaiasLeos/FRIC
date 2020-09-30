import * as React from 'react'
import {useState}  from "react";
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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        return (
            
            <div>
                <GeneralView/>
                <div class="main">
                    <h2>Event Overview Table</h2>
                        <ButtonGroup>
                            <Button variant="dark">Save</Button>
                            <Button variant="dark">Delete</Button>
                            <Button variant="dark">Cancel</Button>
                            <input type="image" alt="sort button" src={AddImage} onClick={handleShow} />
                        </ButtonGroup>
                        <br></br>
                        <Table bordered striped hover>
                            <thead class = "thead-grey">
                                <tr>
                                    <th>Select</th>
                                    <th>Event Name <input type="image" alt="sort button" src={SortImage} /></th>
                                    <th>No. of Systems <input type="image"  alt="sort button" src={SortImage} /></th>
                                    <th>No. of Findings <input type="image" alt="sort button" src={SortImage} /></th>
                                    <th>Progress <input type="image" alt="sort button" src={SortImage} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" id="cb1" value="event" /></td>
                                    <td><Button variant="outline-dark" onClick={handleShow}>Event 1</Button></td>
                                    <td>14</td>
                                    <td>30</td>
                                    <td>76%</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="cb1" value="event" /></td>
                                    <td><Button variant="outline-dark" onClick={handleShow}>Event 2</Button></td>
                                    <td>7</td>
                                    <td>18</td>
                                    <td>30%</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="cb1" value="event" /></td>
                                    <td><Button variant="outline-dark" onClick={handleShow}>Event 3</Button></td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
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
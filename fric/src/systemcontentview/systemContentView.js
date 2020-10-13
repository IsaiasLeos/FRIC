import * as React from 'react'
import { useState } from "react";
import Table from 'react-bootstrap/Table'
import './systemView.css'
import SortImage from '../assets/updownarrow.png'
import GeneralView from '../generalView/generalView'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import SystemDetailedView from './systemDetailedView'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Tree from '../eventTree/eventTree'
import AddImage from '../assets/add.png'
import { useEffect } from "react";
function SystemContentView() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [systems, setEvents] = useState([])
    useEffect(() => {
        fetch('/systems').then(
            response => response.json()).then(data => setEvents(data))
    }, []);
    return (
        <div >
            <GeneralView />
            <div className="main">
                <div className="SystemContentView">
                    <div id="systemTable">
                        <div className="title-buttons">
                            <h2>System Overview Table</h2>
                            <ButtonGroup dialogClassName="title-system-buttons">
                                <Button variant="dark" src={AddImage} >Archive</Button>
                                <Button variant="dark" src={AddImage} onClick={handleShow}>Add</Button>
                            </ButtonGroup>
                        </div>
                        <Table bordered hover striped>
                            <thead className="thead-grey">
                                <tr>
                                    <th>Select</th>
                                    <th>System<input type="image" src={SortImage} alt="Sort Button" className="sort-button" /></th>
                                    <th>No. of Task<input type="image" src={SortImage} alt="Sort Button" className="sort-button" /></th>
                                    <th>No. Findings<input type="image" src={SortImage} alt="Sort Button" className="sort-button" /></th>
                                    <th>Progress<input type="image" src={SortImage} alt="Sort Button" className="sort-button" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {systems.map((event) => (
                                    <tr>
                                        <td><input type="checkbox" id="cb1" value="event" /></td>
                                        <td><Button variant="outline-dark" onClick={handleShow}>{event.sysInfo}</Button></td>
                                        <td>{event.num_task}</td>
                                        <td>{event.num_findings}</td>
                                        <td>{event.prog}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose} dialogclassNameName="task-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            System Detailed View
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SystemDetailedView />
                    </Modal.Body>
                </Modal>
            </div>
            <div class="right-tree">
                <Tree />
            </div>
        </div>

    );
}

export default SystemContentView;
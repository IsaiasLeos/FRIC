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

    const [systems, setSystems] = useState([{ name: '', num_task: '', num_findings: '', prog: '' }])
    useEffect(() => {
        fetch('/systems').then(
            response => response.json()).then(data => setSystems(data))
    }, []);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selected_system, selectedSystem] = useState({ name: '', num_task: '', num_findings: '', prog: '' }); // Set selected event 

    function viewSystem(system) {
        selectedSystem(system);
        handleShow();
    }


    function addSystem() {
        selectedSystem(0);
        handleShow();
    }
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
                                <Button variant="dark" src={AddImage} onClick={addSystem}>Add</Button>
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
                                {systems.map((system) => (
                                    <tr>
                                        <td><input type="checkbox" id="cb1" value="system" /></td>
                                        <td><Button variant="outline-dark" onClick={() => { viewSystem(system) }}>{system.sysInfo}</Button></td>
                                        <td>{system.num_task}</td>
                                        <td>{system.num_findings}</td>
                                        <td>{system.prog}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            System Detailed View {console.log("Here", selected_system)}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SystemDetailedView system={selected_system} />
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
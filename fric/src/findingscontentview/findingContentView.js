import * as React from 'react'
import {useState}  from "react";
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import HelpImage from '../assets/help.png'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import GeneralView from '../generalView/generalView';
import Modal from 'react-bootstrap/Modal'
import FindingDetailedView from './findingDetailedView';
import { Link } from 'react-router-dom'

function TaskContentView(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
            <div>
                <GeneralView />

                <br></br>
                <h2>Findings Overview Table</h2>
                    <Table bordered hover striped>
                        <thead dark>
                            <tr>
                                <th>Select</th>
                                <th>ID<input type="image" src={SortImage} /></th>
                                <th>Title<input type="image" src={SortImage} /></th>
                                <th>System<input type="image" src={SortImage} /></th>
                                <th>Task<input type="image" src={SortImage} /></th>
                                <th>Subtask<input type="image" src={SortImage} /></th>
                                <th>Analyst<input type="image" src={SortImage} /></th>
                                <th>Status<input type="image" src={SortImage} /></th>
                                <th>Classification<input type="image" src={SortImage} /></th>
                                <th>Type<input type="image" src={SortImage} /></th>
                                <th>Risk<input type="image" src={SortImage} /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="Finding1"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>
                            <tr>
                                <td className="Finding2"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>
                            <tr>
                                <td className="Finding4"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>
                        </tbody>
                    
                </Table>

                

                    <Button variant = "outline-dark">Generate ERB Report</Button>
                    &nbsp;
                    <Button variant = "outline-dark">Generate Risk Matrix</Button>
                    &nbsp;
                    <Button variant = "outline-dark">Generate Final Report</Button>
                

                <br></br>
                <br></br>

                <Button variant="outline-dark" onClick={handleShow}>Create Finding</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        Finding Information
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FindingDetailedView />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    </Modal.Footer>
                </Modal>

                
            </div>
    );
}

export default TaskContentView;
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
                <h2>Findings Overview Table</h2>
                <Table>
                <tr>
                                <th>Select</th>
                                <th>ID
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Title
                        <input type="image" src={SortImage} />
                                </th>
                                <th>System
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Task
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Subtask
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Analyst
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Classification
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Type
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Risk
                        <input type="image" src={SortImage} />
                                </th>
                            </tr>

                            <tr>
                                <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
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
                                <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
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
                                <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
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
                                <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
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
                </Table>

                <div id="buttonSet" class="reportButtons">

                    <button>Generate ERB Report</button>
                    &nbsp;
                    <button>Generate Risk Matrix</button>
                    &nbsp;
                    <button>Generate Final Report</button>
                </div>

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
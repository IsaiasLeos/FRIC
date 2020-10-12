import * as React from 'react'
import { useState } from "react";
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import GeneralView from '../generalView/generalView';
import Modal from 'react-bootstrap/Modal'
import FindingDetailedView from './findingDetailedView';
<<<<<<< HEAD
=======
import Tree from '../eventTree/eventTree';
>>>>>>> origin/ialeos
import { Link } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './findingView.css'

function TaskContentView() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
<<<<<<< HEAD
    return(
            <div>
                <GeneralView />
                
                    <div className= 'main'>
                        <div class="finding-title-buttons">
                        <h2>Findings Overview Table</h2>
                            <br></br>
                            
                            <ButtonGroup>
                                    <Button variant="dark">Save</Button>
                                    <Button variant="dark">Delete</Button>
                                    <Button variant="dark">Cancel</Button>
                                    <input type="image" src={AddImage} onClick={handleShow} />
                            </ButtonGroup>
                        </div>
                        <Table bordered hover striped>
                            <thead class = "thead-grey">
                                <tr>
                                    <th>Select</th>
                                    <th>ID<input type="image" src={SortImage} alt = "sort button"/></th>
                                    <th>Title<input type="image" src={SortImage} alt = "sort button"/></th>
                                    <th>System<input type="image" src={SortImage} alt = "sort button"/></th>
                                    <th>Task<input type="image" src={SortImage} alt = "sort button"/></th>
                                    <th>Subtask<input type="image" src={SortImage} alt = "sort button"/></th>
                                    <th>Analyst<input type="image" src={SortImage} alt = "sort button"/></th>
                                    <th>Status<input type="image" src={SortImage} alt = "sort button"/></th>
                                    <th>Classification<input type="image" src={SortImage} alt = "sort button"/></th>
                                    <th>Type<input type="image" src={SortImage} alt = "sort button"/></th>
                                    <th>Risk<input type="image" src={SortImage} alt = "sort button"/></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="Finding1"><input type="checkbox" id="" name="" value="1"></input></td>
                                    <td>234</td>
                                    <td><Button variant="outline-dark" onClick={handleShow}>Finding 1</Button></td>
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
                                    <td><Button variant="outline-dark" onClick={handleShow}>Finding 2</Button></td>
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
                                    <td><Button variant="outline-dark" onClick={handleShow}>Finding 3</Button></td>
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
                                    <td><Button variant="outline-dark" onClick={handleShow}>Finding 4</Button></td>
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

                    
                        <Button variant = "dark">Generate ERB Report</Button>
                        &nbsp;
                        <Button variant = "dark">Generate Risk Matrix</Button>
                        &nbsp;
                        <Button variant = "dark">Generate Final Report</Button>
                    
=======
    return (
        <div>
            <GeneralView />
            <div class="main">
                <div className="title-buttons">
                    <h2>Findings Overview Table</h2>
                    <ButtonGroup>
                        <Button variant="dark">Save</Button>
                        <Button variant="dark">Delete</Button>
                        <Button variant="dark">Cancel</Button>
                        <Button variant="dark" onClick={handleShow} >Add</Button>
                    </ButtonGroup>
                </div>

                <Table bordered hover striped>
                    <thead class="thead-grey">
                        <tr>
                            <th>Select</th>
                            <th>ID<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Title<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>System<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Task<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Subtask<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Analyst<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Status<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Classification<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Type<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Risk<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="Finding1"><input type="checkbox" id="" name="" value="1"></input></td>
                            <td>234</td>
                            <td><Button variant="outline-dark" onClick={handleShow}>Finding 1</Button></td>
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
                            <td><Button variant="outline-dark" onClick={handleShow}>Finding 2</Button></td>
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
                            <td><Button variant="outline-dark" onClick={handleShow}>Finding 3</Button></td>
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
                            <td><Button variant="outline-dark" onClick={handleShow}>Finding 4</Button></td>
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
                <Button variant="dark">Generate ERB Report</Button>
                    &nbsp;
                    <Button variant="dark">Generate Risk Matrix</Button>
                    &nbsp;
                    <Button variant="dark">Generate Final Report</Button>
>>>>>>> origin/ialeos

                <br></br>
                <br></br>



                <Modal show={show} onHide={handleClose} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Finding Detailed View
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FindingDetailedView />
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

<<<<<<< HEAD
                
                <div class="right-tree">
                    <Tree />
                </div>
            </div>
=======
            </div>
            <div class="right-tree">
                <Tree />
            </div>
        </div>
>>>>>>> origin/ialeos
    );
}

export default TaskContentView;
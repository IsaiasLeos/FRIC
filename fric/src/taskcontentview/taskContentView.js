import * as React from 'react'
import {useState}  from "react";
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import GeneralView from '../generalView/generalView';
import Modal from 'react-bootstrap/Modal'
import TaskDetailedView from './taskDetailedView';
import './taskView.css'

function TaskContentView(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <GeneralView />
            <div className="main">
                <div class="task-title-buttons">
                    <h2>Task Overview Table</h2>
                    <ButtonGroup>
                        <Button variant="dark">Archive</Button>
                        <Button variant="dark">Demote</Button>
                        <input type="image" src={AddImage} onClick={handleShow} />
                    </ButtonGroup>
                </div>
                <Table striped bordered hover>
                    <thead class = "thead-grey">
                        <tr>
                            <th><input type="checkbox" id="all-tasks" name="all-tasks" value="0"></input></th>
                            <th>Title<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>System<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Analyst<input type="image" src={SortImage} className="sort-button" alt="sort button" /> </th>
                            <th>Priority<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Progress<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>No. of Subtasks<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>No. of Findings<input type="image" src={SortImage} className="sort-button" alt="sort button" /> </th>
                            <th>Due Date<input type="image" src={SortImage} className="sort-button" alt="sort button"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="column1"><input type="checkbox" id="task1" name="task1" value="1" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 1</Button></td>
                            <td className="column3">System 1</td>
                            <td className="column4">Analyst 1</td>
                            <td className="column5">Low</td>
                            <td className="column6">Not started</td>
                            <td className="column7">1</td>
                            <td className="column8">2</td>
                            <td className="column9">30/09/2020</td>
                        </tr>
                        <tr>
                            <td className="column1"><input type="checkbox" id="task2" name="task2" value="2" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 2</Button></td>
                            <td className="column3">System 2</td>
                            <td className="column4">Analyst 2</td>
                            <td className="column5">Medium</td>
                            <td className="column6">Assigned</td>
                            <td className="column7">2</td>
                            <td className="column8">4</td>
                            <td className="column9">27/09/2020</td>
                        </tr>
                        <tr>
                            <td className="column1"><input type="checkbox" id="task3" name="task3" value="3" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 3</Button></td>
                            <td className="column3">System 3</td>
                            <td className="column4">Analyst 3</td>
                            <td className="column5">High</td>
                            <td className="column6">In progress</td>
                            <td className="column7">2</td>
                            <td className="column8">3</td>
                            <td className="column9">23/09/2020</td>
                        </tr>
                        <tr>
                            <td className="column1"><input type="checkbox" id="task4" name="task4" value="4" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 4</Button></td>
                            <td className="column3">System 4</td>
                            <td className="column4">Analyst 4</td>
                            <td className="column5">Low</td>
                            <td className="column6">Transfered</td>
                            <td className="column7">2</td>
                            <td className="column8">3</td>
                            <td className="column9">26/10/2020</td>
                        </tr>
                        <tr>
                            <td className="column1"><input type="checkbox" id="task5" name="task5" value="5" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 5</Button></td>
                            <td className="column3">System 5</td>
                            <td className="column4">Analyst 5</td>
                            <td className="column5">Low</td>
                            <td className="column6">Complete</td>
                            <td className="column7">3</td>
                            <td className="column8">3</td>
                            <td className="column9">15/09/2020</td>
                        </tr>
                        <tr>
                            <td className="column1"><input type="checkbox" id="task6" name="task1" value="6" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 6</Button></td>
                            <td className="column3">System 6</td>
                            <td className="column4">Analyst 6</td>
                            <td className="column5">Low</td>
                            <td className="column6">Not applicable</td>
                            <td className="column7">1</td>
                            <td className="column8">4</td>
                            <td className="column9">30/10/2020</td>
                        </tr>
                    </tbody>
                </Table>
                <Modal show={show} onHide={handleClose} dialogClassName="task-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Task Detailed View
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TaskDetailedView />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="outline-dark" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default TaskContentView;
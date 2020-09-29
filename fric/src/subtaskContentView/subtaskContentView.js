import * as React from 'react'
import {useState}  from "react";
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import GeneralView from '../generalView/generalView';
import SubtaskDetailedView from './subtaskDetailedView';
import { Link } from 'react-router-dom'
import './subtaskView.css';

function SubtaskContentView(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <GeneralView />
            <h3>Subtask Overview Table</h3>
            <div class="buttons">
                <Button variant="dark">Archive</Button>
                <Button variant="dark">Promote</Button>
                <input type="image" src={AddImage} onClick={handleShow} />
            </div>
            <Table>
            <tr>
                <th><input type="checkbox" id="all-subtasks" name="all-subtasks" value="0"></input></th>
                <th>Title<input type="image" src={SortImage} class="sort-button" /></th>
                <th>Task<input type="image" src={SortImage} class="sort-button" /></th>
                <th>Analyst<input type="image" src={SortImage} class="sort-button" /></th>
                <th>Progress<input type="image" src={SortImage} class="sort-button" /></th>
                <th>No. of Findings<input type="image" src={SortImage} class="sort-button" /></th>
                <th>Due Date<input type="image" src={SortImage} class="sort-button" /></th>
            </tr>
            <tr>
                <td class="column1"><input type="checkbox" id="subtask1" name="subtask1" value="1" /></td>
                <td class="column2"><Button variant="outline-dark" onClick={handleShow}>Title 1</Button></td>
                <td class="column3">Task 1</td>
                <td class="column4">Analyst 1</td>
                <td class="column5">Not started</td>
                <td class="column6">1</td>
                <td class="column7">25/09/2020</td>
            </tr>
            <tr>
                <td class="column1"><input type="checkbox" id="subtask2" name="subtask2" value="2" /></td>
                <td class="column2"><Button variant="outline-dark" onClick={handleShow}>Title 2</Button></td>
                <td class="column3">Task 2</td>
                <td class="column4">Analyst 2</td>
                <td class="column5">Complete</td>
                <td class="column6">1</td>
                <td class="column7">22/09/2020</td>
            </tr>
            <tr>
                <td class="column1"><input type="checkbox" id="subtask3" name="subtask3" value="3" /></td>
                <td class="column2"><Button variant="outline-dark" onClick={handleShow}>Title 3</Button></td>
                <td class="column3">Task 3</td>
                <td class="column4">Analyst 3</td>
                <td class="column5">In progress</td>
                <td class="column6">3</td>
                <td class="column7">18/09/2020</td>
            </tr>
            <tr>
                <td class="column1"><input type="checkbox" id="subtask3" name="subtask3" value="3" /></td>
                <td class="column2"><Button variant="outline-dark" onClick={handleShow}>Title 4</Button></td>
                <td class="column3">Task 4</td>
                <td class="column4">Analyst 4</td>
                <td class="column5">transfered</td>
                <td class="column6">0</td>
                <td class="column7">21/10/2020</td>
            </tr>
            <tr>
                <td class="column1"><input type="checkbox" id="subtask5" name="subtask5" value="5" /></td>
                <td class="column2"><Button variant="outline-dark" onClick={handleShow}>Title 5</Button></td>
                <td class="column3">Task 5</td>
                <td class="column4">Analyst 5</td>
                <td class="column5">Completed</td>
                <td class="column6">1</td>
                <td class="column7">10/09/2020</td>
            </tr>
            <tr>
                <td class="column1"><input type="checkbox" id="subtask6" name="subtask1" value="6" /></td>
                <td class="column2"><Button variant="outline-dark" onClick={handleShow}>Title 6</Button></td>
                <td class="column3">Task 6</td>
                <td class="column4">Analyst 6</td>
                <td class="column5">Not applicable</td>
                <td class="column6">2</td>
                <td class="column7">25/10/2020</td>
            </tr>
            </Table>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        Subtask Detailed View
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SubtaskDetailedView />
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
        
    );
}

export default SubtaskContentView;
import * as React from 'react'
import {useState}  from "react";
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import GeneralView from '../generalView/generalView';
import SubtaskDetailedView from './subtaskDetailedView';
import './subtaskView.css';
import Tree from '../eventTree/eventTree';

function SubtaskContentView(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <GeneralView />
            <div className="main">
                <div class="title-buttons">
                    <h2>Subtask Overview Table</h2>
                    <ButtonGroup>
                    <Button variant="dark">Archive</Button>
                        <Button variant="dark">Promote</Button>
                        <input type="image" src={AddImage} onClick={handleShow} alt="Add subtask button"/>
                    </ButtonGroup>
                </div>
                
                <Table  striped bordered hover>
                    <thead class = "thead-grey">
                        <tr>
                            <th><input type="checkbox" id="all-subtasks" name="all-subtasks" value="0"></input></th>
                            <th>Title<input type="image" src={SortImage} className="sort-button" alt="Sort button"/></th>
                            <th>Task<input type="image" src={SortImage} className="sort-button" alt="Sort button"/></th>
                            <th>Analyst<input type="image" src={SortImage} className="sort-button" alt="Sort button"/></th>
                            <th>Progress<input type="image" src={SortImage} className="sort-button" alt="Sort button"/></th>
                            <th>No. of Findings<input type="image" src={SortImage} className="sort-button" alt="Sort button"/></th>
                            <th>Due Date<input type="image" src={SortImage} className="sort-button" alt="Sort button"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="column1"><input type="checkbox" id="subtask1" name="subtask1" value="1" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 1</Button></td>
                            <td className="column3">Task 1</td>
                            <td className="column4">Analyst 1</td>
                            <td className="column5">Not started</td>
                            <td className="column6">1</td>
                            <td className="column7">25/09/2020</td>
                        </tr>
                        <tr>
                            <td className="column1"><input type="checkbox" id="subtask2" name="subtask2" value="2" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 2</Button></td>
                            <td className="column3">Task 2</td>
                            <td className="column4">Analyst 2</td>
                            <td className="column5">Complete</td>
                            <td className="column6">1</td>
                            <td className="column7">22/09/2020</td>
                        </tr>
                        <tr>
                            <td className="column1"><input type="checkbox" id="subtask3" name="subtask3" value="3" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 3</Button></td>
                            <td className="column3">Task 3</td>
                            <td className="column4">Analyst 3</td>
                            <td className="column5">In progress</td>
                            <td className="column6">3</td>
                            <td className="column7">18/09/2020</td>
                        </tr>
                        <tr>
                            <td className="column1"><input type="checkbox" id="subtask3" name="subtask3" value="3" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 4</Button></td>
                            <td className="column3">Task 4</td>
                            <td className="column4">Analyst 4</td>
                            <td className="column5">transfered</td>
                            <td className="column6">0</td>
                            <td className="column7">21/10/2020</td>
                        </tr>
                        <tr>
                            <td className="column1"><input type="checkbox" id="subtask5" name="subtask5" value="5" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 5</Button></td>
                            <td className="column3">Task 5</td>
                            <td className="column4">Analyst 5</td>
                            <td className="column5">Completed</td>
                            <td className="column6">1</td>
                            <td className="column7">10/09/2020</td>
                        </tr>
                        <tr>
                            <td className="column1"><input type="checkbox" id="subtask6" name="subtask1" value="6" /></td>
                            <td className="column2"><Button variant="outline-dark" onClick={handleShow}>Title 6</Button></td>
                            <td className="column3">Task 6</td>
                            <td className="column4">Analyst 6</td>
                            <td className="column5">Not applicable</td>
                            <td className="column6">2</td>
                            <td className="column7">25/10/2020</td>
                        </tr>
                    </tbody>
                </Table>
                <Modal show={show} onHide={handleClose} dialogClassName="subtask-modal">
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
                <div class="right-tree">
                    <Tree />
                </div>
                
        </div>
        
    );
}

export default SubtaskContentView;
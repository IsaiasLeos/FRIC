import * as React from 'react'
import {useState}  from "react";
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import HelpImage from '../assets/help.png'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import GeneralView from '../generalView/generalView';
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

function TaskContentView(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
            <div>
                <GeneralView />
                <h2>Task Overview Table</h2>
                <div class="buttons">
                    <form action="">
                        <input type="button" name="" id="" value="Archive" />
                        <input type="button" name="" id="" value="Demote" />
                    </form>
                </div>
                <Table>
                <tr>
                    <th><input type="checkbox" id="all-tasks" name="all-tasks" value="0"></input></th>
                    
                    <th>Title<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>System<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>Analyst<input type="image" src={SortImage} class="sort-button" /> </th>
                    <th>Priority<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>Progress<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>No. of Subtasks<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>No. of Findings<input type="image" src={SortImage} class="sort-button" /> </th>
                    <th>Due Date<input type="image" src={SortImage} class="sort-button" /></th>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task1" name="task1" value="1" /></td>
                    <td class="column2"><Button variant="outline-dark" onClick={handleShow}>Title 1</Button></td>
                    <td class="column3">System 1</td>
                    <td class="column4">Analyst 1</td>
                    <td class="column5">Low</td>
                    <td class="column6">Not started</td>
                    <td class="column7">1</td>
                    <td class="column8">2</td>
                    <td class="column9">30/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task2" name="task2" value="2" /></td>
                    <td class="column2"><Link to="/TaskDetails" >Title 2</Link></td>
                    <td class="column3">System 2</td>
                    <td class="column4">Analyst 2</td>
                    <td class="column5">Medium</td>
                    <td class="column6">Assigned</td>
                    <td class="column7">2</td>
                    <td class="column8">4</td>
                    <td class="column9">27/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task3" name="task3" value="3" /></td>
                    <td class="column2"><Link to="/TaskDetails" >Title 3</Link></td>
                    <td class="column3">System 3</td>
                    <td class="column4">Analyst 3</td>
                    <td class="column5">High</td>
                    <td class="column6">In progress</td>
                    <td class="column7">2</td>
                    <td class="column8">3</td>
                    <td class="column9">23/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task4" name="task4" value="4" /></td>
                    <td class="column2"><Link to="/TaskDetails" >Title 4</Link></td>
                    <td class="column3">System 4</td>
                    <td class="column4">Analyst 4</td>
                    <td class="column5">Low</td>
                    <td class="column6">Transfered</td>
                    <td class="column7">2</td>
                    <td class="column8">3</td>
                    <td class="column9">26/10/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task5" name="task5" value="5" /></td>
                    <td class="column2"><Link to="/TaskDetails" >Title 5</Link></td>
                    <td class="column3">System 5</td>
                    <td class="column4">Analyst 5</td>
                    <td class="column5">Low</td>
                    <td class="column6">Complete</td>
                    <td class="column7">3</td>
                    <td class="column8">3</td>
                    <td class="column9">15/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task6" name="task1" value="6" /></td>
                    <td class="column2"><Link to="/TaskDetails" >Title 6</Link></td>
                    <td class="column3">System 6</td>
                    <td class="column4">Analyst 6</td>
                    <td class="column5">Low</td>
                    <td class="column6">Not applicable</td>
                    <td class="column7">1</td>
                    <td class="column8">4</td>
                    <td class="column9">30/10/2020</td>
                </tr>
                </Table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                    </Modal.Footer>
                </Modal>
                <input type="image" src={AddImage} onclick="openForm()" />
                
            </div>
    );
}

export default TaskContentView;
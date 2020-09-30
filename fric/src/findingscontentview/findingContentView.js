import * as React from 'react'
import { useState } from "react";
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import HelpImage from '../assets/help.png'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import GeneralView from '../generalView/generalView';
import Modal from 'react-bootstrap/Modal'
import FindingDetailedView from './findingDetailedView';
import { Link } from 'react-router-dom'
import Tree from '../eventTree/eventTree';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function TaskContentView() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <GeneralView />
            <div class="main">
                <h2>Findings Overview Table</h2>
                <Table bordered hover striped>
                    <thead class="thead-grey">
                        <tr>
                            <th>Select</th>
                            <th>ID<input type="image" src={SortImage} alt="sort button" /></th>
                            <th>Title<input type="image" src={SortImage} alt="sort button" /></th>
                            <th>System<input type="image" src={SortImage} alt="sort button" /></th>
                            <th>Task<input type="image" src={SortImage} alt="sort button" /></th>
                            <th>Subtask<input type="image" src={SortImage} alt="sort button" /></th>
                            <th>Analyst<input type="image" src={SortImage} alt="sort button" /></th>
                            <th>Status<input type="image" src={SortImage} alt="sort button" /></th>
                            <th>Classification<input type="image" src={SortImage} alt="sort button" /></th>
                            <th>Type<input type="image" src={SortImage} alt="sort button" /></th>
                            <th>Risk<input type="image" src={SortImage} alt="sort button" /></th>
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

                <br></br>
                <h2>Findings Overview Table</h2>
                <ButtonGroup>
                    <Button variant="dark">Save</Button>
                    <Button variant="dark">Delete</Button>
                    <Button variant="dark">Cancel</Button>
                    <input type="image" src={AddImage} onClick={handleShow} />
                </ButtonGroup>
                
            </div>
        </div>
    );
}

export default TaskContentView;
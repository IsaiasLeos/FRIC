import * as React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import SortImage from '../assets/updownarrow.png';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import GeneralView from '../generalView/generalView';
import SubtaskDetailedView from './subtaskDetailedView';
import './subtaskView.css';
import Tree from '../eventTree/eventTree';

function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();  
    let time = newDate.toTimeString()
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}
function SubtaskContentView() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [subtasks, setSubtasks] = useState([{ 
        subtaskTitle: '', 
        task: '', 
        analyst: '', 
        subtaskProgress: '', 
        numFindings: '',
        subtaskDueDate: '' 
    }])

    useEffect(() => {
        fetch('/subtasks').then(
            response => response.json()).then(data => setSubtasks(data))
    }, []);

    const [selected_subtask, selectedSubtask] = useState({        
        subtaskTitle: '', 
        task: '', 
        analyst: '', 
        subtaskProgress: '', 
        numFindings: '',
        subtaskDueDate: '' 
    });

    function viewSubtask(subtask) {
        sendLog("view subtask");
        selectedSubtask(subtask);
        handleShow();
    }

    function sendLog(a) {
        let action = {
            date: getCurrentDate("/"),
            action: a,
            analyst: ""
        }
        fetch('/addlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action),
        }).then(response => response.json())
            .then(data => {
                console.log("Success", data);
            })
            .catch(error => {
                console.error('Error', error)
            });
    }

    function addSubtask() {
        sendLog("add subtask");
        selectedSubtask(0);
        handleShow();
    }


    return (
        <div>
            <GeneralView />
            <div className="main">
                <div class="title-buttons">
                    <h2>Subtask Overview Table</h2>
                    <ButtonGroup>
                        <Button variant="dark">Archive</Button>
                        <Button variant="dark">Promote</Button>
                        <Button variant="dark" onClick={addSubtask}>Add </Button>
                    </ButtonGroup>
                </div>

                <Table striped bordered hover>
                    <thead class="thead-grey">
                        <tr>
                            <th><input type="checkbox" id="all-subtasks" name="all-subtasks" value="0"></input></th>
                            <th>Title<input type="image" src={SortImage} className="sort-button" alt="Sort button" /></th>
                            <th>Task<input type="image" src={SortImage} className="sort-button" alt="Sort button" /></th>
                            <th>Analyst<input type="image" src={SortImage} className="sort-button" alt="Sort button" /></th>
                            <th>Progress<input type="image" src={SortImage} className="sort-button" alt="Sort button" /></th>
                            <th>No. of Findings<input type="image" src={SortImage} className="sort-button" alt="Sort button" /></th>
                            <th>Due Date<input type="image" src={SortImage} className="sort-button" alt="Sort button" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {subtasks.map((subtask) => (
                            <tr>
                                <td><input type="checkbox" id="cb1" value="subtask" /></td>
                                <td><Button variant="outline-dark" onClick={() => { viewSubtask(subtask) }}>{subtask.subtaskTitle}</Button></td>
                                <td>{subtask.task}</td>
                                <td>{subtask.analyst}</td>
                                <td>{subtask.subtaskProgress}</td>
                                <td>{subtask.numFindings}</td>
                                <td>{subtask.subtaskDueDate}</td>
                            </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Modal show={show} onHide={handleClose} dialogClassName="subtask-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Subtask Detailed View {console.log("Here", selected_subtask)}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SubtaskDetailedView  subtask={selected_subtask} />
                    </Modal.Body>
                </Modal>
            </div>
            <div class="right-tree">
                <Tree />
            </div>

        </div>

    );
}

export default SubtaskContentView;
import * as React from 'react';
import Table from 'react-bootstrap/Table';
import './taskView.css';
import Button from 'react-bootstrap/Button';
import TaskDetailedView from './taskDetailedView';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect, useState} from "react";
import SortImage from '../assets/updownarrow.png';
// import Modal from 'react-bootstrap/Modal';
import { Modal } from 'react-bootstrap';

function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.toTimeString()
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}
export default function TaskContentView(props) {

    const [selected_task, selectedTask] = useState();
    const [dialogOpen, handleDialog] = React.useState(false);

    function handleDialogOpen(state) {
        sendLog("Task dialog open");
        handleDialog(true)
        console.log(state)
        selectedTask(state)
      }
    
      function handleDialogClose() {
        sendLog("Task dialog close")
        handleDialog(false)
      }

    // Handles logging information
    function sendLog(a) {
        let action = {
            date: getCurrentDate("/"),
            action: a,
            analyst: ""
        }
        console.log(action)
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

    useEffect(() => {
        props.updateData();
      });
    
    return (
        <div>
            <div className="main">
                <div className="SystemContentView">
                    <div id="systemTable" update={props.updateSystemData}>
                        <div className="title-buttons">
                            <div className="name">
                                <h2>Task Overview Table</h2>
                            </div>
                            <ButtonGroup dialogClassName="title-system-buttons">
                                <Button variant="dark">Archive</Button>
                                <Button variant="dark" onClick={handleDialogOpen}>Add</Button>
                                <Button variant="dark">Demote</Button>
                            </ButtonGroup>

                            <Modal show={dialogOpen} onHide={handleDialogClose}>
                                <Modal.Header>
                                    <Modal.Title>
                                        Task Detailed View
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <TaskDetailedView task={selected_task} closeDetailAction={handleDialogClose} />
                                </Modal.Body>
                            </Modal>
                        </div><br/>
                        <div className="tablestyle">
                            <Table striped bordered hover style={{textAlign:'center'}}>
                                <thead class="thead-grey">
                                    <tr>
                                        <th><input type="checkbox" id="all-tasks" name="all-tasks" value="0"></input></th>
                                        <th>Title<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                        <th>System<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                        <th>Analyst<input type="image" src={SortImage} className="sort-button" alt="sort button" /> </th>
                                        <th>Priority<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                        <th>Progress<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                        <th>No. of Subtasks<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                        <th>No. of Findings<input type="image" src={SortImage} className="sort-button" alt="sort button" /> </th>
                                        <th>Due Date<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.data.map((state) => (
                                        <tr>
                                            <td><input type="checkbox" id="cb1"/></td>
                                            <td><Button onClick={() => handleDialogOpen(state)} variant="outline-dark">{state.taskTitle}</Button></td>
                                            <td>{state.system}</td>
                                            <td>{state.taskAnalysts}</td>
                                            <td>{state.taskPriority}</td>
                                            <td>{state.taskProgress}</td>
                                            <td>{state.num_subtask}</td>
                                            <td>{state.num_finding}</td>
                                            <td>{state.taskDueDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import * as React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import SortImage from '../assets/updownarrow.png';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import GeneralView from '../generalView/generalView';
import Modal from 'react-bootstrap/Modal';
import TaskDetailedView from './taskDetailedView';
import './taskView.css';
import Tree from '../eventTree/eventTree';

function TaskContentView() {
    function getCurrentDate(separator = '') {
        let newDate = new Date()
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let time = newDate.toTimeString()
        return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [tasks, setTasks] = useState([{ 
        taskTitle: '', 
        system: '', 
        taskAnalysts: '',
        taskPriority: '', 
        taskProgress: '', 
        num_subtask: '', 
        num_finding: '', 
        taskDueDate:''}])
    useEffect(() => {
        fetch('/tasks').then(
            response => response.json()).then(data => setTasks(data))
    }, []);


    const [selected_task, selectedTask] = useState({ taskTitle: '', system: '', taskAnalysts: '', taskProgress: '', num_subtask: '', num_finding: '', taskDueDate:'' }); // Set selected event 

    function viewTask(task) {
        sendLog("view task");
        selectedTask(task);
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



    function addTask() {
        sendLog("add Task");
        selectedTask(0);
        handleShow();
    }

    
    return (
        <div>
            <GeneralView />
            <div className="main">
                <div class="title-buttons">
                    <h2>Task Overview Table</h2>
                    <ButtonGroup>
                        <Button variant="dark">Archive</Button>
                        <Button variant="dark">Demote</Button>
                        <Button variant="dark" onClick={addTask}>Add</Button>
                    </ButtonGroup>
                </div>
                <Table striped bordered hover>
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
                        {tasks.map((task) => (
                            <tr>
                                <td><input type="checkbox" id="cb1" value="system" /></td>
                                <td><Button variant="outline-dark" onClick={() => { viewTask(task) }}>{task.taskTitle}</Button></td>
                                <td>{task.system}</td>
                                <td>{task.taskAnalysts}</td>
                                <td>{task.taskPriority}</td>
                                <td>{task.taskProgress}</td>
                                <td>{task.num_subtask}</td>
                                <td>{task.num_finding}</td>
                                <td>{task.taskDueDate}</td>
                                </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal show={show} onHide={handleClose} dialogClassName="task-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Task Detailed View
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TaskDetailedView task={selected_task} />
                    </Modal.Body>
                </Modal>
            </div>
            <div class="right-tree">
                <Tree />
            </div>
        </div>
    );
}

export default TaskContentView;
import * as React from 'react'
import '../generalView/style.css'
import 'react-bootstrap'
import '../assets/css/bootstrap.css'
import Modal from 'react-bootstrap/Modal'
import { useState } from "react"
import Button from 'react-bootstrap/Button'
import SetUpContentView from '../setupContentView/setupContentView'
function GeneralView() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function viewNote() {
        handleShow();
    }
    return (
        <div>
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <a class="navbar-brand" href="/Setup">FRIC</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02"
                    aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample02">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link " href="/Event">Event</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/SystemView">System</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Findings">Findings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Task">Task</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="/Subtask">Subtask</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="/Archive">Archive</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Configuration">Configuration</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Setup">Setup</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Help">Help</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={viewNote}> Notification </a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-md-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    </form>
                </div>
            </nav>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ textAlign: "center" }} className="Notify">

                        <label for="taskTitle">
                            Task Title:<br />
                            <input type="text" name="taskT" value="Task1" />
                        </label><br />

                        <label for="taskDueDate">
                            Task Due Date:<br />
                            <input type="text" name="task-Due-Date" value="11/11/2020" />
                        </label><br />

                        <label for="subtaskTitle">
                            SubTask Title:<br />
                            <input type="text" name="subtaskT" value="Subtask3" />
                        </label><br />

                        <label for="subtaskDueDate">
                            SubTask Due Date:<br />
                            <input type="text" name="subtask-Due-Date" value="11/10/2020" />
                        </label><br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}> Okay! </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default GeneralView;
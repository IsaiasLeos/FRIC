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

    const [demoteselected_task, demoteselectedTask] = useState();
    const [demotedialogOpen, demotehandleDialog] = React.useState(false);


    // Function used to open handle dialog
    function handleDialogOpen(state) {
        sendLog("Task dialog open");
        handleDialog(true)
        console.log(state)
        selectedTask(state)
    }

    // Function used to close handle dialog
    function handleDialogClose() {
        sendLog("Task dialog close")
        handleDialog(false)
    }

    //Function used to open demote handle dialog
    function demotehandleDialogOpen(state) {
        sendLog("Demote dialog open");
        demotehandleDialog(true)
        console.log(state)
        demoteselectedTask(state)
    }

    // Function used to close demote handle dialog
    function demotehandleDialogClose() {
        sendLog("Demote dialog close")
        demotehandleDialog(false)
    }

    // Function used perform sorting in asscending order
    function compareByAsc(key) {
        return function(a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    // Function used perform sorting in desscending order
    function compareByDesc(key) {
        return function(a, b) {
          if (a[key] < b[key]) return 1;
          if (a[key] > b[key]) return -1;
          return 0;
        };
    }

    // Function used as a toggle to switch between sorting operations
    function sortBy(key) {
        let arrayCopy = [...props.data];
        const arrInStr = JSON.stringify(arrayCopy);
        arrayCopy.sort(this.compareByAsc(key));
        const arrInStr1 = JSON.stringify(arrayCopy);
        if (arrInStr === arrInStr1) {
          arrayCopy.sort(this.compareByDesc(key));
        }
        props.setState({ data: arrayCopy });
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

    // updates the task data
    useEffect(() => {
        props.updateData();
      });

      
    //Return displays the task content view 
    return (
        <div>
            <div className="main">
                <div className="TaskContentView">
                    <div id="systemTable" >
                        <div className="title-buttons">
                            <div className="name">
                                <h2>Task Overview Table</h2>
                            </div>
                            <ButtonGroup dialogClassName="title-system-buttons">
                                <Button variant="dark">Archive</Button>
                                <Button variant="dark" onClick={handleDialogOpen}>Add</Button>
                                <Button variant="dark" onClick={demotehandleDialogOpen}>Demote</Button>
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


                            <Modal show={demotedialogOpen} onHide={demotehandleDialogClose}>
                                <Modal.Header>
                                    <Modal.Title>
                                        Demote Task View
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="button-input-group">
                                        <Button variant="outline-dark" className="btn cancel" onClick={demotehandleDialogClose}> Cancel </Button>
                                        <Button variant="outline-dark" type="submit" className="btn">Submit </Button>
                                    </div>  
                                </Modal.Body>
                            </Modal>
                        </div>
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

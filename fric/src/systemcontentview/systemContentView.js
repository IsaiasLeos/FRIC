import * as React from 'react'
import Table from 'react-bootstrap/Table'
import './systemView.css'
import Button from 'react-bootstrap/Button'
import SystemDetailedView from './systemDetailedView'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useEffect } from "react";
import { Modal } from 'react-bootstrap';
function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.toTimeString()
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}

export default function SystemContentView(props) {

    const [dialogOpen, handleDialog] = React.useState(false)
    function handleDialogOpen() {
        handleDialog(true)
        sendLog("system dialog open");
    }

    function handleDialogClose() {
        handleDialog(false)
        sendLog("system dialog close")
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

    useEffect(() => {
        props.updateData();
    });

    return (
        <div >
            
            <div className="main">
                <div className="SystemContentView">
                    <div id="systemTable" update={props.updateSystemData}>
                        <div className="title-buttons">
                            <h2>System Overview Table</h2>


                            <ButtonGroup dialogclassname="title-system-buttons">
                                <Button variant="dark" >Archive</Button>
                                <Button variant="dark" onClick={handleDialogOpen}>Add</Button>
                            </ButtonGroup>
                            <Modal show={dialogOpen} onHide={handleDialogClose} >
                                <Modal.Header>
                                    <Modal.Title>
                                        System Detailed View
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <SystemDetailedView closeDetailAction={handleDialogClose} />
                                </Modal.Body>
                            </Modal>

                        </div>
                        <Table bordered hover striped>
                            <thead className="thead-grey">
                                <tr>
                                    <th>Select</th>
                                    <th>System</th>
                                    <th>No. of Task</th>
                                    <th>No. Findings</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data.map((state) => (
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td><Button variant="outline-dark">{state.sysInfo}</Button></td>
                                        <td>{state.num_task}</td>
                                        <td>{state.num_findings}</td>
                                        <td>{state.prog}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}


import * as React from 'react'
import Table from 'react-bootstrap/Table'
import './findingView.css'
import Button from 'react-bootstrap/Button'
import FindingDetailedView from './findingDetailedView';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useEffect, useState } from "react";
import { Modal } from 'react-bootstrap';
function getCurrentDate(separator = '') {
  let newDate = new Date()
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let time = newDate.toTimeString()
  return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}

export default function FindingContentView(props) {

  const [selected_finding, selectedFinding] = useState();

  const [dialogOpen, handleDialog] = React.useState(false)
  
  function handleDialogOpen(state) {
    sendLog("finding dialog open");
    handleDialog(true)
    selectedFinding(state)
    
  }

  function handleDialogClose() {
    sendLog("finding dialog close")
    handleDialog(false)
  }
  function sendLog(a) {
    let action = {
      date: getCurrentDate("/"),
      action: a,
      analyst: ""
    }
    // console.log(action)
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
              <h2>Findings Overview Table</h2>
  <h2>{console.log()}</h2>


              <ButtonGroup dialogclassname="title-system-buttons">
                <Button variant="dark" >Archive</Button>
                <Button variant="dark" onClick={handleDialogOpen}>Add</Button>
              </ButtonGroup>
              <Modal show={dialogOpen} onHide={handleDialogClose} size = 'lg'>
                <Modal.Header>
                  <Modal.Title>
                    Finding Detailed View
                                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FindingDetailedView finding={selected_finding} closeDetailAction={handleDialogClose} />
                </Modal.Body>
              </Modal>

            </div>
            <Table bordered hover striped>
              <thead className="thead-grey">
                <tr>
                  <th>Select</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>System</th>
                  <th>Task</th>
                  <th>Subtask</th>
                  <th>Analyst</th>
                  <th>Status</th>
                  <th>Classification</th>
                  <th>Type</th>
                  <th>Risk</th>
                  <th>IDID</th>
                </tr>
              </thead>
              <tbody>
                {props.data.map((state) => (
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>{state.findingID}</td>
                        <td><Button onClick={() => handleDialogOpen(state)} variant="outline-dark">{state.hostName}</Button></td>
                        <td>{state.findingSystem}</td>
                        <td>{state.findingTask}k</td>
                        <td>{state.findingSubtask}</td>
                        <td>{state.findingAnalyst}</td>
                        <td>{state.findingStatus}</td>
                        <td>{state.findingClassification}</td>
                        <td>{state.findingType}</td>
                        <td>{state.findingRisk}</td>
                        <td>{state.id}</td>
                        
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
import * as React from 'react'
import { useState } from "react";
import SortImage from '../assets/updownarrow.png'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import GeneralView from '../generalView/generalView';
import Modal from 'react-bootstrap/Modal'
import FindingDetailedView from './findingDetailedView';
import Tree from '../eventTree/eventTree';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './findingView.css'
import { useEffect } from "react";

function FindingContentView() {
    
    function getCurrentDate(separator = '') {
        let newDate = new Date()
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let time = newDate.toTimeString()
        let check = '';
        return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [findings, setFindings] = useState([{ //define findings
         findingID: '',
         hostName: '',
         ip_port: '',
         description: '',
         longDescription: '',
         findingStatus: '',
         findingType: '',
         findingClassification: '',
         findingSystem: '',
         findingTask: '',
         findingSubtask: '',
         relatedFindings: '',
         findingConfidentiality: '',
         findingIntegrity: '',
         findingAvailability: '',
         findingAnalyst: '',
         findingCollaborators: '',
         findingPosture: '',
         mitigationDesc: '',
         mitigationLongDesc: '',
         threatRelevence: '',
         countermeasure: '',
         impactDesc: '',
         findingImpact: '',
         severityCategoryScore: '',
         vulnerabilityScore: '',
         quantitativeScore: '',
         findingRisk: '',
         findingLikelihood: '',
         findingCFIS: '',
         findingIFIS: '',
         findingAFIS: '',
         impactScore: '',
         activeTasks: ''

    }])

    useEffect(() => {
        fetch('/findings').then(
            response => response.json()).then(data => setFindings(data))
    }, []);

    
    const [selected_finding, selectedFinding] = useState({
        findingID: '',
        hostName: '',
        ip_port: '',
        description: '',
        longDescription: '',
        findingStatus: '',
        findingType: '',
        findingClassification: '',
        findingSystem: '',
        findingTask: '',
        findingSubtask: '',
        relatedFindings: '',
        findingConfidentiality: '',
        findingIntegrity: '',
        findingAvailability: '',
        findingAnalyst: '',
        findingCollaborators: '',
        findingPosture: '',
        mitigationDesc: '',
        mitigationLongDesc: '',
        threatRelevence: '',
        countermeasure: '',
        impactDesc: '',
        findingImpact: '',
        severityCategoryScore: '',
        vulnerabilityScore: '',
        quantitativeScore: '',
        findingRisk: '',
        findingLikelihood: '',
        findingCFIS: '',
        findingIFIS: '',
        findingAFIS: '',
        impactScore: '',
        activeTasks: ''
        
    });



    
     
   // var obj = this.props.finding.activeTasks;
    //var arr = Object.keys(obj).map(function(key){return obj[key];});

    function viewFinding(finding) { //When we press title button
        sendLog("view finding");
        selectedFinding(finding);
        handleShow();
    }
    function setActiveTasks(finding){
        
        
    }

    function sendLog(a) { //action that is going to be recorded
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

    function addFinding() {
        sendLog("add finding");
        selectedFinding(0);
        handleShow();
    }

    
 
    return (
        <div>
            <GeneralView />
            <div class="main">
                <div className="title-buttons">
                    <h2>Findings Overview Table</h2>
                    <ButtonGroup>
                         
                        <Button variant="dark">Delete</Button>
                        <Button variant="dark">Cancel</Button>
                        <Button variant="dark" onClick={addFinding}>Add</Button> 
                        
                    </ButtonGroup>
                </div>

                <Table bordered hover striped>
                    <thead class="thead-grey">
                        <tr>
                            <th>Select</th>
                            <th>ID<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Title<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>System<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Task<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Subtask<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Analyst<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Status<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Classification<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Type<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>Risk<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            <th>TEST<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {findings.map((finding) => (
                            <tr>
                                <td><input type="checkbox" id="cb1" value="" /></td>
                                <td>{finding.findingID}</td>
                                <td><Button variant="outline-dark" onClick={() => {viewFinding(finding)}}>{finding.hostName}</Button></td>
                                <td>{finding.findingSystem}</td>
                                <td>{finding.findingTask}k</td>
                                <td>{finding.findingSubtask}</td>
                                <td>{finding.findingAnalyst}</td>
                                <td>{finding.findingStatus}</td>
                                <td>{finding.findingClassification}</td>
                                <td>{finding.findingType}</td>
                                <td></td>
                                
                                
                                
                               
                            </tr>
                        ))}

                    </tbody>
                </Table>
                <Button variant="dark">Generate ERB Report</Button>
                    &nbsp;
                    <Button variant="dark">Generate Risk Matrix</Button>
                    &nbsp;
                    <Button variant="dark">Generate Final Report</Button>

                <br></br>
                <br></br>



                <Modal show={show} onHide={handleClose} size='lg' dialogClassName= "finding-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Finding Detailed View
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FindingDetailedView finding={selected_finding} />
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

export default FindingContentView;
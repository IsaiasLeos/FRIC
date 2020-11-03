import * as React from 'react';
import Button from 'react-bootstrap/Button'
import { useState, } from 'react';

function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.toTimeString()
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}

function FindingDetailedView(props) {

    const [findingID, setID] = useState('');
    const [host_Name, setHostName] = useState('');
    const [ip_Port, setIpPort] = useState('');

    const [description, setDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [findingStatus, setStatus] = useState('');

    const [findingType, setFindingType] = useState('');
    const [findingClassification, setFindingClassification] = useState('');
    const [findingSystem, setFindingSystem] = useState('');

    const [findingTask, setFindingTask] = useState('');
    const [findingSubtask, setFindingSubtask] = useState('');
    const [relatedFindings, setRelatedFindings] = useState('');

    const [findingConfidentiality, setfindingConfidentiality] = useState('');
    const [findingIntegrity, setFindingIntegrity] = useState('');
    const [findingAvailability, setFindingAvailability] = useState('');

    const [findingAnalyst, setfindingAnalyst] = useState('');
    const [findingCollaborators, setFindingCollaborators] = useState('');
    const [findingPosture, setFindingPosture] = useState('');

    const [mitigationDesc, setMitigationDesc] = useState('');
    const [mitigationLongDesc, setMitigationLongDesc] = useState('');
    const [threatRelevence, setThreatRelevence] = useState('');

    const [countermeasure, setCountermeasure] = useState('');
    const [impactDesc, setImpactDesc] = useState('');
    const [findingImpact, setFindingImpact] = useState('');

    const [severityCategoryScore, setSeverityCategoryScore] = useState('');
    const [vulnerabilityScore, setVulnerabilityScore] = useState('');
    const [quantitativeScore, setQuantitativeScore] = useState('');

    const [findingRisk, setFindingRisk] = useState('');
    const [findingLikelihood, setFindingLikelihood] = useState('');
    const [findingCFIS, setFindingCFIS] = useState('');

    const [findingAFIS, setFindingAFIS] = useState('');
    const [findingIFIS, setFindingIFIS] = useState('');

    const [impactScore, setImpactScore] = useState('');
    const [findingFiles, setFindingFiles] = useState('');
    

    
    

    let state = {
        findingID: findingID,
        hostName: host_Name,
        ip_port: ip_Port,
        description: description,
        longDescription: longDescription,
        findingStatus: findingStatus,
        findingType: findingType,
        findingClassification: findingClassification,
        findingSystem: findingSystem,
        findingTask: findingTask,
        findingSubtask: findingSubtask,
        relatedFindings: relatedFindings,
        findingConfidentiality: findingConfidentiality,
        findingIntegrity: findingIntegrity,
        findingAvailability: findingAvailability,
        findingAnalyst: findingAnalyst,
        findingCollaborators: findingCollaborators,
        findingPosture: findingPosture,
        mitigationDesc: mitigationDesc,
        mitiagtionLongDesc: mitigationLongDesc,
        threatRelevence: threatRelevence,
        countermeasure: countermeasure,
        impactDesc: impactDesc,
        findingImpact: findingImpact,
        severityVategoryScore: severityCategoryScore,
        vulnerabilityScore: vulnerabilityScore,
        quantitativeScore: quantitativeScore,
        findingRisk: findingRisk,
        findingLikelihood: findingLikelihood,
        findingCFIS: findingCFIS,
        findingAFIS: findingAFIS,
        findingIFIS: findingIFIS,
        impactScore: impactScore,
        findingFiles: findingFiles,
        
        
    };
    let action = {
        date: "",
        action: "",
        analyst: ""
    }

    function SendData(e) {
        console.log(props.finding)
        e.preventDefault();
        if (state.name == null) {
            fetch('/addfinding', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
            }).then(response => response.json())
                .then(data => {
                    console.log("Success", data);
                })
                .catch(error => {
                    console.error('Error', error)
                });
            SendLog(e);
            props.closeDetailAction();
        } 
    }

    function closeOnCancel() {
        props.closeDetailAction()
    }

    function SendLog(e) {
        e.preventDefault();
        action.action = "submit system";
        action.date = getCurrentDate("/");
        action.analyst = "";
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

    return (
        <div>
            <div className="systemDetailedTable" id="systemDetailedTable">
                <div className="title-buttons"></div>

                <h3>Finding Information</h3>
                <div className="input-group">
                    <form className="input-form" onSubmit={SendData} >

                        <input type="text" onChange={e => setID(e.target.value)} name="findingID" defaultValue={props.finding.findingID} className="form-control browser-default mr-3" placeholder="System Information" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <textarea type="text" onChange={e => setHostName(e.target.value)} name="hostName" defaultValue={props.finding.hostName} className="form-control mr-3" placeholder="System Description" aria-label="System Description" aria-describedby="basic-addon2"></textarea>
                            &nbsp;
                            <input type="text" onChange={e => setIpPort(e.target.value)} name="ip_port" defaultValue={props.finding.ip_port} className="form-control mr-3" placeholder="System Location" aria-label="System Location" aria-describedby="basic-addon2"></input>
                            
                            
                        
                        <div className="button-input-group">
                            <Button variant="outline-dark" className="btn cancel" onClick={closeOnCancel}>Cancel </Button>
                            <Button variant="outline-dark" type="submit" className="btn">Submit </Button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    );

}

export default FindingDetailedView;
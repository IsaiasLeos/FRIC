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
    
    const [id, setUniqueID] = useState('');

    let state = {
        id: id,
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
        mitigationLongDesc: mitigationLongDesc,
        threatRelevence: threatRelevence,
        countermeasure: countermeasure,
        impactDesc: impactDesc,
        findingImpact: findingImpact,
        severityCategoryScore: severityCategoryScore,
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
        console.log(props.finding, "original finding") //debugging
        e.preventDefault();

        if(props.finding.id == null){ 
            
            console.log("ADDING NEW HERE") //debugging
            console.log(state) //debugging
            
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

            //console.log(state.uniqueID, "<-- FindingID")
            SendLog(e);
            props.closeDetailAction();
        }else{ //it exists  if(state.uniqueID != '')
            console.log("TRYING TO EDIT HERE"); // debugging 
            console.log(props.finding.id)
            // Edit Event 
            fetch('/editfinding', {
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
            <div className="findingDetailedTable" id="findingDetailedTable">
                <div className="title-buttons"></div>

                <h3>Finding Information</h3>
                <div className="input-group">
                    <form className="input-form" onSubmit={SendData} >

                        <h4>Finding Information</h4>
                        <label for="ID">
                            ID:
                            <br></br><input type="text" onChange={e => setID(e.target.value)} name="findingID" defaultValue={props.finding.findingID} className="form-control browser-default mr-3" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </label><br></br>

                        <label htmlFor="hostName">
                            Host Name:
                            <br></br>
                            <input type="text" onChange={e => setHostName(e.target.value)} name="hostName" defaultValue={props.finding.hostName} className="form-control browser-default mr-3" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </label><br />
                        <label for="IP-Port">
                            IP Port:
                            <br></br>
                            <input type="text" onChange={e => setIpPort(e.target.value)} name="ip_port" defaultValue={props.finding.ip_port} className="form-control browser-default mr-3" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </label><br></br>
                        <label for="Description">
                            Description:
                            <br></br>
                            <input type="text" onChange={e => setDescription(e.target.value)} name="description" defaultValue={props.finding.description} className="form-control browser-default mr-3" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </label><br />

                        <label for="LongDescription">
                            Long Description:
                            <br></br>
                            <textarea name="longDescription" onChange={e => setLongDescription(e.target.value)} defaultValue={props.finding.longDescription} cols="45" rows="5" class="browser-default  mr-3"></textarea>
                        </label><br />

                        <label for="Status">
                            Status:
                            <br></br>
                            <select name="findingStatus" onChange={e => setStatus(e.target.value)} defaultValue={props.finding.findingStatus} id="findingStatus" class="browser-default custom-select mr-3">
                                <option value="Open">Open</option>
                                <option value="Closed">Closed</option>
                                
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Type">
                            Type:
                            <br></br>
                            <select name="findingType"  onChange={e => setFindingType(e.target.value)} defaultValue={props.finding.findingType} id="findingType" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Manufacturer Default Creds">Manufacturer Default Creds</option>
                                <option value="Lack of Authentication">Lack of Authentication</option>
                                <option value="Plain Text Protocol">Plain Text Protocol</option>
                                <option value="Plain Text Web Login">Plain Text Web Login</option>
                                <option value="Encryption">Encryption</option>
                                <option value="Authentication Bypass">Authentication Bypass</option>
                                <option value="Port Security">Port Security</option>
                                <option value="Access Control">Access Control</option>
                                <option value="Least Privilege">Least Privilege</option>
                                <option value="Privilege Escalation">Privilege Escalation</option>
                                <option value="Missing Patches">Missing Patches</option>
                                <option value="Physical Security">Physical Security</option>
                                <option value="Information Disclosure">Information Disclosure</option>

                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Classification">
                            Classification:
                            <br></br>
                            <select name="findingClassification"  onChange={e => setFindingClassification(e.target.value)} defaultValue={props.finding.findingClassification} id="findingClassification" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                
                                <option value="Vulnerability">Vulnerability</option>
                                <option value="Information">Information</option>
                            </select>
                        </label><br />

                        <label for="fileName">
                            File:
                            <br></br>
                            <input type="file" name="findingFiles"  id="findingFiles" class="browser-default mr-3" />
                            
                        </label><br />

                        <label for="system">
                            System:
                            <br></br>
                            <select name="findingSystem"  onChange={e => setFindingSystem(e.target.value)} defaultValue={props.finding.findingSystem} id="findingSystem" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="System A">System A</option>
                                <option value="System B">System B</option>  
                                <option value="System C">System C</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="activeTaskFields">
                            Task(s):
                            <br></br>
                            <select name="findingTask"  onChange={e => setFindingTask(e.target.value)} defaultValue={props.finding.findingTask} id="findingTask" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Task A">Task A</option>
                                <option value="Task B">Task B</option>
                                <option value="Task C">Task C</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Subtask">
                            Subtask(s):
                            <br></br>
                            <select name="findingSubtask"  onChange={e => setFindingSubtask(e.target.value)} defaultValue={props.finding.findingSubtask} id="findingSubtask" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Subtask A">Subtask A</option>
                                <option value="Subtask B">Subtask B</option>
                                <option value="Subtask C">Subtask C</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <br></br>
                        <label for="relatedFindings">
                            Related Finding(s):
                            <br></br>
                            <select name="relatedFindings"  onChange={e => setRelatedFindings(e.target.value)} defaultValue={props.finding.relatedFindings} id="relatedFindings" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Finding 1">Finding 1</option>
                                <option value="Finding 2">Finding 2</option>
                                <option value="Finding 3">Finding 3</option>
                            </select>
                        </label>

                        <h4>Finding Impact</h4>
                        <label for="Confidentiality">
                            Confidentiality:
                            <br></br>
                            <select name="findingConfidentiality"  onChange={e => setfindingConfidentiality(e.target.value)} defaultValue={props.finding.findingConfidentiality} id="findingConfidentiality" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Information">Information</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Integrity">
                            Integrity:
                            <br></br>
                            <select name="findingIntegrity"  onChange={e => setFindingIntegrity(e.target.value)} defaultValue={props.finding.findingIntegrity} id="findingIntegrity" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Information">Information</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Availability">
                            Availability:
                            <br></br>
                            <select name="findingAvailability"  onChange={e => setFindingAvailability(e.target.value)} defaultValue={props.finding.findingAvailability} id="findingAvailability" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Information">Information</option>
                            </select>
                        </label>

                        <h4>Analyst Information</h4>

                        <label for="AnalystInformation">
                            Analyst:
                            <br></br>
                            <select name="findingAnalyst"  onChange={e => setfindingAnalyst(e.target.value)} defaultValue={props.finding.findingAnalyst} id="findingAnalyst" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Alex Vasquez">Alex Vasquez</option>
                                <option value="Jacob Padilla">Jacob Padilla</option>
                                <option value="Luis Soto">Luis Soto</option>

                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="CollaboratorInformation">
                            Collaborator(s):
                            <br></br>
                            <select name="findingCollaborators"  onChange={e => setFindingCollaborators(e.target.value)} defaultValue={props.finding.findingCollaborators} id="findingCollaborators" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Alex Vasquez">Alex Vasquez</option>
                                <option value="Jacob Padilla">Jacob Padilla</option>
                                <option value="Luis Soto">Luis Soto</option>

                            </select>
                        </label><br></br>
                        <label for="Posture">
                            Posture:
                            <br></br>
                            <select name="findingPosture"  onChange={e => setFindingPosture(e.target.value)} defaultValue={props.finding.findingPosture} id="findingPosture" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Insider">Insider</option>
                                <option value="Insider-Nearsider">Insider-Nearsider</option>
                                <option value="Outsider">Outsider</option>
                                <option value="Nearsider">Nearsider</option>
                                <option value="Nearsider-Outsider">Nearsider-Outsider</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        
                        <h4>Mitigation</h4>
                        <label for="MitigationDescription">
                            Brief Description:
                            <br></br>
                            <input type="text" name="mitigationDesc"  onChange={e => setMitigationDesc(e.target.value)} defaultValue={props.finding.id} id="mitigationDesc" class="browser-default  mr-3" />
                        </label><br />
                        <label for="LongDescription">
                            Long Description:
                            <br></br>
                            <textarea name="mitigationLongDesc"  onChange={e => setMitigationLongDesc(e.target.value)} defaultValue={props.finding.mitigationLongDesc} id="mitigationLongDesc" cols="45" rows="5" class="browser-default  mr-3"></textarea>
                        </label><br />

                        <h4>Threat Relevence</h4>
                        <label for="Relevence">
                            Threat Relevence:
                            <br></br>
                            <select name="threatRelevence"  onChange={e => setThreatRelevence(e.target.value)} defaultValue={props.finding.threatRelevence} id="threatRelevence" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Expected">Expected</option>
                                <option value="Anticpated">Anticipated</option>
                                <option value="Predicted">Predicted</option>
                                <option value="Possible">Possible</option>
                            </select>
                        </label>

                        <h4>Countermeasure</h4>
                        <label for="Countermeasure">
                            Countermeasure:
                            <br></br>
                            <select name="countermeasure"  onChange={e => setCountermeasure(e.target.value)} defaultValue={props.finding.countermeasure} id="countermeasure" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Very High (10)">Very High (10)</option>
                                <option value="High">High (7-9)</option>
                                <option value="Moderate">Moderate (4-6)</option>
                                <option value="Low">Low (1-3)</option>
                                <option value="Very Low">Very Low (0)</option>
                            </select>
                        </label>

                        <h4>Impact</h4>
                        <label for="ImpactDescription">
                            Impact Description:
                            <br></br>
                            <input type="text" name="impactDesc"  onChange={e => setImpactDesc(e.target.value)} defaultValue={props.finding.impactDesc} id="impactDesc" class="browser-default  mr-3" />
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Impact">
                            Impact:
                            <br></br>
                            <select name="findingImpact"  onChange={e => setFindingImpact(e.target.value)} defaultValue={props.finding.findingImpact} id="findingImpact" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="VH">VH</option>
                                <option value="H">H</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="VL">VL</option>
                            </select>
                        </label>

                        <h4>Severity</h4>

                        <label for="SeverityCategoryScore">
                            Severity Category Score:
                            <br></br>
                            <input type="text" name="severityCategoryScore"  onChange={e => setSeverityCategoryScore(e.target.value)} defaultValue={props.finding.severityCategoryScore} id="severityCategoryScore" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="VulnerabilitySeverityDescription">
                            Vulnerability Severity:
                            <br></br>
                            <input type="text" name="vulnerabilityScore"  onChange={e => setVulnerabilityScore(e.target.value)} defaultValue={props.finding.vulnerabilityScore}  id="vulnerabilityScore" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="QuantitativeVulnerabilityDescription">
                            Quantitative Vulnerability Severity:
                            <br></br>
                            <input type="text" name="quantitativeScore" onChange={e => setQuantitativeScore(e.target.value)} defaultValue={props.finding.quantitativeScore} id="quantitativeScore" class="browser-default mr-3" />
                        </label><br></br>

                        <h4>Risk</h4>

                        <label for="RiskDescription">
                            Risk:
                            <br></br>
                            <input type="text" name="findingRisk" onChange={e => setFindingRisk(e.target.value)} defaultValue={props.finding.findingRisk} id="findingRisk" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="LikelihoodDescription">
                            Likelihood:
                            <br></br>
                            <input type="text" name="findingLikelihood" onChange={e => setFindingLikelihood(e.target.value)} defaultValue={props.finding.findingLikelihood} id="findingLikelihood" class="browser-default  mr-3" />
                        </label><br></br>

                        <h4>Finding System Level Impact</h4>

                        <label for="CFISDescription">
                            Confidentiality Finding Impact on System:
                            <br></br>
                            <input type="text" name="findingCFIS" onChange={e => setFindingCFIS(e.target.value)} defaultValue={props.finding.findingCFIS} id="findingCFIS" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="IFISDescription">
                            Integrity Finding Impact on System:
                            <br></br>
                            <input type="text" name="findingIFIS" onChange={e => setFindingIFIS(e.target.value)} defaultValue={props.finding.findingIFIS} id="findingIFIS" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="AFISDescription">
                            Availability Finding Impact on System:
                            <br></br>
                            <input type="text" name="findingAFIS" onChange={e => setFindingAFIS(e.target.value)} defaultValue={props.finding.findingAFIS} id="findingAFIS" class="browser-default  mr-3" />
                        </label><br></br>

                        

                        <label for="ImpactScoreDescription">
                            Impact Score:
                            <br></br>
                            <input type="text" name="impactScoreDesc" onChange={e => setImpactScore(e.target.value)} defaultValue={props.finding.impactDesc} id="impactScoreDesc" class="browser-default  mr-3" />
                        </label><br></br>
    
                            
                        
                        <div className="button-input-group">
                            
                            &nbsp;
                            <Button variant="outline-dark" className="btn cancel" onClick={closeOnCancel}>Cancel </Button>
                            &nbsp;
                            <Button variant="outline-dark" type="submit" className="btn">Submit </Button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    );

}

export default FindingDetailedView;
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

    //ALL attributes of a Finding
    const [findingID, setID] = useState(props.finding.findingID);
    const [host_Name, setHostName] = useState(props.finding.hostName);
    const [ip_Port, setIpPort] = useState(props.finding.ip_port);
    const [description, setDescription] = useState(props.finding.description);
    const [longDescription, setLongDescription] = useState(props.finding.longDescription);
    const [findingStatus, setStatus] = useState(props.finding.findingStatus);
    const [findingType, setFindingType] = useState(props.finding.findingType);
    const [findingClassification, setFindingClassification] = useState(props.finding.findingClassification);
    const [findingSystem, setFindingSystem] = useState(props.finding.findingSystem);
    const [findingTask, setFindingTask] = useState(props.finding.findingTask);
    const [findingSubtask, setFindingSubtask] = useState(props.finding.findingSubtask);
    const [relatedFindings, setRelatedFindings] = useState(props.finding.relatedFindings);
    const [findingConfidentiality, setfindingConfidentiality] = useState(props.finding.findingConfidentiality);
    const [findingIntegrity, setFindingIntegrity] = useState(props.finding.findingIntegrity);
    const [findingAvailability, setFindingAvailability] = useState(props.finding.findingAvailability);
    const [findingAnalyst, setfindingAnalyst] = useState(props.finding.findingAnalyst);
    const [findingCollaborators, setFindingCollaborators] = useState(props.finding.findingCollaborators);
    const [findingPosture, setFindingPosture] = useState(props.finding.findingPosture);
    const [mitigationDesc, setMitigationDesc] = useState(props.finding.mitigationDesc);
    const [mitigationLongDesc, setMitigationLongDesc] = useState(props.finding.mitigationLongDesc);
    const [threatRelevence, setThreatRelevence] = useState(props.finding.threatRelevence);
    const [countermeasure, setCountermeasure] = useState(props.finding.countermeasure);
    const [impactDesc, setImpactDesc] = useState(props.finding.impactDesc);
    const [findingImpact, setFindingImpact] = useState(props.finding.findingImpact);
    const [severityCategoryScore, setSeverityCategoryScore] = useState(props.finding.severityCategoryScore);
    const [vulnerabilityScore, setVulnerabilityScore] = useState(props.finding.vulnerabilityScore);
    const [quantitativeScore, setQuantitativeScore] = useState(props.finding.quantitativeScore);
    const [findingRisk, setFindingRisk] = useState(props.finding.findingRisk);
    const [findingLikelihood, setFindingLikelihood] = useState(props.finding.findingLikelihood);
    const [findingCFIS, setFindingCFIS] = useState(props.finding.findingCFIS);
    const [findingAFIS, setFindingAFIS] = useState(props.finding.findingAFIS);
    const [findingIFIS, setFindingIFIS] = useState(props.finding.findingIFIS);
    const [impactScore, setImpactScore] = useState(props.finding.impactScore);
    const [findingFiles, setFindingFiles] = useState(''); //Files that can be attached to a finding. Still need to rework
    
    const [id, setUniqueID] = useState(props.finding.id); //Each finding will have a unique ID

    let state = { //If 
        id: props.finding.id ? props.finding.id : '', //if attribute does not have value, set to '' 
        findingID: findingID ? findingID : '',
        hostName: host_Name ? host_Name: '',
        ip_port: ip_Port ? ip_Port: '',
        description: description ? description: '',
        longDescription: longDescription ? longDescription: '',
        findingStatus: findingStatus ? findingStatus :'',
        findingType: findingType ? findingType: '',
        findingClassification: findingClassification ? findingClassification: '',
        findingSystem: findingSystem ? findingSystem: '',
        findingTask: findingTask ? findingTask: ' ',
        findingSubtask: findingSubtask ? findingSubtask :'',
        relatedFindings: relatedFindings ? relatedFindings: '',
        findingConfidentiality: findingConfidentiality ? findingConfidentiality: '',
        findingIntegrity: findingIntegrity ? findingIntegrity: '',
        findingAvailability: findingAvailability? findingAvailability: '',
        findingAnalyst: findingAnalyst ? findingAnalyst : '',
        findingCollaborators: findingCollaborators ? findingCollaborators: '',
        findingPosture: findingPosture ? findingPosture: '',
        mitigationDesc: mitigationDesc ? mitigationDesc: '',
        mitigationLongDesc: mitigationLongDesc ? mitigationLongDesc: '',
        threatRelevence: threatRelevence ? threatRelevence: '',
        countermeasure: countermeasure ? countermeasure: '',
        impactDesc: impactDesc ? impactDesc: '',
        findingImpact: findingImpact ? findingImpact: '',
        severityCategoryScore: severityCategoryScore ? severityCategoryScore: '',
        vulnerabilityScore: vulnerabilityScore ? vulnerabilityScore: '',
        quantitativeScore: quantitativeScore ? quantitativeScore: '',
        findingRisk: findingRisk ? findingRisk: '',
        findingLikelihood: findingLikelihood ? findingLikelihood: '',
        findingCFIS: findingCFIS ? findingCFIS: '',
        findingAFIS: findingAFIS ? findingAFIS: '',
        findingIFIS: findingIFIS ? findingIFIS: '',
        impactScore: impactScore ? impactScore: '',
        findingFiles: findingFiles ? findingFiles: '',
    };

    let action = { //used for logging actions on page
        date: "",
        action: "",
        analyst: ""
    }

    function SendData(e) {
        
        setUniqueID(props.finding.id); 
        e.preventDefault();

        if(props.finding.id == undefined){ //Checking if the finding exists
             
            fetch('/addfinding', { //if finding does not exist, add new one
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
                props.closeDetailAction(); //Close pop up modal
        }else{ //Finding exists, user trying to edit
            console.log("TRYING TO EDIT HERE"); 
            console.log(state)
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
            
            props.closeDetailAction(); //Close pop up modal
        }
        
    }

    function closeOnCancel() { //Close modal when cancel button is clicked
         props.closeDetailAction()
    }

    function SendLog(e) { //creating and sending a log for user action 
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
                            <Button variant="outline-dark" type = "submit" className="btn">Submit</Button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    );

}

export default FindingDetailedView;
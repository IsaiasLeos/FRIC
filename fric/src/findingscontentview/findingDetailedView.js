import * as React from 'react'
import Button from 'react-bootstrap/Button'

function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.toTimeString()
    let check = '';
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}
class findingDetailedView extends React.Component {

    constructor() {
        super();
        this.state = {
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
            impactScore: ''
        };

        this.action = {
            date: " ",
            action: " ",
            analyst: " "
        };
    }

    handleEventType(e) {
        console.log(e.target.value);
    }

    handleEventClass(e) {
        console.log(e.target.value);
    }
    onChange = (e) => { //call on modification
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        this.action.action = "submit finding";
        this.action.date = getCurrentDate("/");
        this.action.analyst = "";
        e.preventDefault();

        fetch('/addfinding', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        }).then(response => response.json())
            .then(data => {
                console.log("Success", data);
            })
            .catch(error => {
                console.error('Error', error)
            });

        fetch('/addlog', {//Logging information
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.action),
        }).then(response => response.json())
            .then(data => {
                console.log("Success", data);
            })
            .catch(error => {
                console.error('Error', error)
            });
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit} className= "finding-form">
                        <h4>Finding Information</h4>
                        <label for="ID">
                            ID:
                            <br></br><input type="text" value={this.props.finding.findingID} onChange={this.onChange} name="findingID" id="ID" />
                        </label><br></br>

                        <label htmlFor="hostName">
                            Host Name:
                            <br></br>
                            <input type="text" value={this.props.finding.hostName} onChange={this.onChange} name = "hostName" id="host-name" className="finding-data"/>
                        </label><br />
                        <label for="IP-Port">
                            IP Port:
                            <br></br>
                            <input type="text" value={this.props.finding.ip_port} onChange={this.onChange}  name="ipPort" id="ipPort" class="browser-default  mr-3" />
                        </label><br></br>
                        <label for="Description">
                            Description:
                            <br></br>
                            <input type="text" value={this.props.finding.description} onChange={this.onChange} name="description" id="description" class="browser-default  mr-3" />
                        </label><br />

                        <label for="LongDescription">
                            Long Description:
                            <br></br>
                            <textarea name="LongDescription" value={this.props.finding.longDescription} onChange={this.onChange} id="LongDescription" cols="45" rows="5" class="browser-default  mr-3"></textarea>
                        </label><br />

                        <label for="Status">
                            Status:
                            <br></br>
                            <select name="status" value={this.props.finding.findingStatus} onChange={this.onChange} id="status" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="analyst1">Open</option>
                                <option value="analyst2">Closed</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Type">
                            Type:
                            <br></br>
                            <select name="type" value={this.props.finding.findingType} onChange={this.onChange} id="type" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="collaborator1">Manufacturer Default Creds</option>
                                <option value="collaborator2">Lack of Authenticatio</option>
                                <option value="collaborator3">Plain Text Protocol</option>
                                <option value="collaborator4">Plain Text Web Login</option>
                                <option value="collaborator1">Encryption</option>
                                <option value="collaborator2">Authentication Bypass</option>
                                <option value="collaborator3">Port Security</option>
                                <option value="collaborator4">Access Control</option>
                                <option value="collaborator4">Least Privilege</option>
                                <option value="collaborator4">Privilege Escalation</option>
                                <option value="collaborator4">Missing Patches</option>
                                <option value="collaborator4">Physical Security</option>
                                <option value="collaborator4">Information Disclosure</option>

                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Classification">
                            Classification:
                            <br></br>
                            <select name="classification" value={this.props.finding.findingClassification} onChange={this.onChange} name id="classification" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="analyst1">Vulnerability</option>
                                <option value="analyst2">Information</option>
                            </select>
                        </label><br />

                        <label for="fileName">
                            File:
                            <br></br>
                            <input type="text" name="filename" id="filename" class="browser-default mr-3" />
                        </label><br />

                        <label for="system">
                            System:
                            <br></br>
                            <select name="system" value={this.props.finding.findingSystem} onChange={this.onChange} id="system" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="relatedTask1">System A</option>
                                <option value="relatedTask2">System B</option>
                                <option value="relatedTask3">System C</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Task">
                            Task(s):
                            <br></br>
                            <select name="tasksUsed" value={this.props.finding.findingTask} onChange={this.onChange} id="tasksUsed" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="relatedTask1">Task A</option>
                                <option value="relatedTask2">Task B</option>
                                <option value="relatedTask3">Task C</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Subtask">
                            Subtask(s):
                            <br></br>
                            <select name="subtasksUsed" value={this.props.finding.findingSubtask} onChange={this.onChange} id="subtasksUsed" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="relatedTask1">Subtask A</option>
                                <option value="relatedTask2">Subtask B</option>
                                <option value="relatedTask3">Subtask C</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <br></br>
                        <label for="relatedFindings">
                            Related Finding(s):
                            <br></br>
                            <select name="relatedFindings" value={this.props.finding.relatedFindings} onChange={this.onChange} id="relatedFindings" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="relatedTask1">Finding 1</option>
                                <option value="relatedTask2">Finding 2</option>
                                <option value="relatedTask3">Finding 3</option>
                            </select>
                        </label>

                        <h4>Finding Impact</h4>
                        <label for="Confidentiality">
                            Confidentiality:
                            <br></br>
                            <select name="confidentiality" value={this.props.finding.findingConfidentiality} onChange={this.onChange} id="confidentiality-dropdown" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">Low</option>
                                <option value="Attachment2">Medium</option>
                                <option value="Attachment3">High</option>
                                <option value="Attachment4">Information</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Integrity">
                            Integrity:
                            <br></br>
                            <select name="integrity" value={this.props.finding.findingIntegrity} onChange={this.onChange} id="integrity-dropdown" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">Low</option>
                                <option value="Attachment2">Medium</option>
                                <option value="Attachment3">High</option>
                                <option value="Attachment4">Information</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Availability">
                            Availability:
                            <br></br>
                            <select name="availability" value={this.props.finding.findingAvailability} onChange={this.onChange} id="availability-dropdown" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">Low</option>
                                <option value="Attachment2">Medium</option>
                                <option value="Attachment3">High</option>
                                <option value="Attachment4">Information</option>
                            </select>
                        </label>

                        <h4>Analyst Information</h4>

                        <label for="AnalystInformation">
                            Analyst:
                            <br></br>
                            <select name="analystInfo" value={this.props.finding.findingAnalyst} onChange={this.onChange} id="analystInfo-dropdown" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">Alex Vasquez</option>
                                <option value="Attachment2">Jacob Padilla</option>
                                <option value="Attachment3">Luis Soto</option>

                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="CollaboratorInformation">
                            Collaborator(s):
                            <br></br>
                            <select name="collaboratorInfo" value={this.props.finding.findingCollalborators} onChange={this.onChange} id="collaboratorInfo-dropdown" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">Alex Vasquez</option>
                                <option value="Attachment2">Jacob Padilla</option>
                                <option value="Attachment3">Luis Soto</option>

                            </select>
                        </label><br></br>
                        <label for="Posture">
                            Posture:
                            <br></br>
                            <select name="postureInfo" value={this.props.finding.findingPosture} onChange={this.onChange} id="postureInfo-dropdown" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">Insider</option>
                                <option value="Attachment2">Insider-Nearsider</option>
                                <option value="Attachment3">Outsider</option>
                                <option value="Attachment2">Nearsider</option>
                                <option value="Attachment3">Nearsider-Outsider</option>
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        
                        <h4>Mitigation</h4>
                        <label for="MitigationDescription">
                            Brief Description:
                            <br></br>
                            <input type="text" name="mitigationDescription" value={this.props.finding.mitigationDesc} onChange={this.onChange} id="mitigationDescriptionInfo" class="browser-default  mr-3" />
                        </label><br />
                        <label for="LongDescription">
                            Long Description:
                            <br></br>
                            <textarea name="LongDescription" value={this.props.finding.mitigationLongDesc} onChange={this.onChange} id="LongDescription" cols="45" rows="5" class="browser-default  mr-3"></textarea>
                        </label><br />

                        <h4>Threat Relevence</h4>
                        <label for="Relevence">
                            Threat Relevence:
                            <br></br>
                            <select name="relevenceInfo" value={this.props.finding.threatRelevence} onChange={this.onChange} id="relevenceInfo-dropdown" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">Confirmed</option>
                                <option value="Attachment2">Expected</option>
                                <option value="Attachment3">Anticipated</option>
                                <option value="Attachment2">Predicted</option>
                                <option value="Attachment3">Possible</option>
                            </select>
                        </label>

                        <h4>Countermeasure</h4>
                        <label for="Relevence">
                            Countermeasure:
                            <br></br>
                            <select name="countermeasureInfo" value={this.props.finding.countermeasure} onChange={this.onChange} id="countermeasureInfo-dropdown" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">Very High (10)</option>
                                <option value="Attachment2">High (7-9)</option>
                                <option value="Attachment3">Moderate (4-6)</option>
                                <option value="Attachment2">Low (1-3)</option>
                                <option value="Attachment3">Very Low (0)</option>
                            </select>
                        </label>

                        <h4>Impact</h4>
                        <label for="ImpactDescription">
                            Impact Description:
                            <br></br>
                            <input type="text" name="impactDescription" value={this.props.finding.impactDesc} onChange={this.onChange} id="impactDescriptionInfo" class="browser-default  mr-3" />
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Impact">
                            Impact:
                            <br></br>
                            <select name="impactInfo" value={this.props.finding.findingImpact} onChange={this.onChange} id="impactInfo-dropdown" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">VH</option>
                                <option value="Attachment2">H</option>
                                <option value="Attachment3">M</option>
                                <option value="Attachment2">L</option>
                                <option value="Attachment3">VL</option>
                            </select>
                        </label>

                        <h4>Severity</h4>

                        <label for="SeverityCategoryScore">
                            Severity Category Score:
                            <br></br>
                            <input type="text" name="severityCategoryScoreDescription" value={this.props.finding.severityCategoryScore} onChange={this.onChange} id="severityCategoryScoreDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="VulnerabilitySeverityDescription">
                            Vulnerability Severity:
                            <br></br>
                            <input type="text" value={this.props.finding.vulnerabilityScore} onChange={this.onChange} name="vulnerabilitySeverityDescription" id="vulnerabilitySeverityDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="QuantitativeVulnerabilityDescription">
                            Quantitative Vulnerability Severity:
                            <br></br>
                            <input type="text" name="quantitativeVulnerabilityDescription" value={this.props.finding.quantitativeScore} onChange={this.onChange} id="quantitativeVulnerabilityDescriptionInfo" class="browser-default mr-3" />
                        </label><br></br>

                        <h4>Risk</h4>

                        <label for="RiskDescription">
                            Risk:
                            <br></br>
                            <input type="text" name="riskDescription" value={this.props.finding.findingRisk} onChange={this.onChange} id="riskDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="LikelihoodDescription">
                            Likelihood:
                            <br></br>
                            <input type="text" name="likelihoodDescription" value={this.props.finding.findingLikelihood} onChange={this.onChange} id="likelihoodDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <h4>Finding System Level Impact</h4>

                        <label for="CFISDescription">
                            Confidentiality Finding Impact on System:
                            <br></br>
                            <input type="text" name="CFISDescription" value={this.props.finding.findingCFIS} onChange={this.onChange} id="CFISDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="IFISDescription">
                            Integrity Finding Impact on System:
                            <br></br>
                            <input type="text" name="IFISDescription" value={this.props.finding.findingIFIS} onChange={this.onChange} id="IFISDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="AFISDescription">
                            Availability Finding Impact on System:
                            <br></br>
                            <input type="text" name="AFISDescription" value={this.props.finding.findingAFIS} onChange={this.onChange} id="AFISDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="ImpactScoreDescription">
                            Impact Score:
                            <br></br>
                            <input type="text" name="impactScoreDescription" value={this.props.finding.impactDesc} onChange={this.onChange} id="impactScoreDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>
                        <div class="button-input-group">
                                <form onSubmit> {/*For some reason, this closes the modal*/}
                                    <Button variant="outline-dark" type="submit" class="btn cancel">Cancel </Button>
                                </form>
                                <Button variant="outline-dark" type="submit" class="btn">Submit </Button>
                            </div>
                    </form>
                </div>

            </div>

        );
    }
}

export default findingDetailedView;
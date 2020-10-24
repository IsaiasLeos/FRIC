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
            findingID: "",
            hostName: "",
        };

        this.action = {
            date: "",
            action: "",
            analyst: ""
        }
    }

    onChange = (e) => { //call on modification
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        this.action.action = "submit finding";//Setting up information for Logging
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
                    <form action="" class="form" onSubmit={this.onSubmit}>
                        <h4>Finding Information</h4>
                        <label for="ID">
                            ID:
                            <br></br><input type="text" name="findingID" id="ID" onChange={this.onChange} placeholder="ID" />
                        </label><br></br>

                        <label for="Host Name">
                            Host Name:
                            <br></br>
                            <input type="text" name="hostName" id="hostName" class="browser-default  mr-3" onChange={this.onChange} placeholder="Host Name" />
                        </label><br />
                        <label for="IP-Port">
                            IP Port:
                            <br></br>
                            <input type="text" name="ipPort" id="ipPort" class="browser-default  mr-3" />
                        </label><br></br>
                        <label for="Description">
                            Description:
                            <br></br>
                            <input type="text" name="description" id="description" class="browser-default  mr-3" />
                        </label><br />

                        <label for="LongDescription">
                            Long Description:
                            <br></br>
                            <textarea name="LongDescription" id="LongDescription" cols="45" rows="5" class="browser-default  mr-3"></textarea>
                        </label><br />

                        <label for="Status">
                            Status:
                            <br></br>
                            <select name="status" id="status" class="browser-default custom-select mr-3">
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
                            <select name="type" id="type" class="browser-default custom-select mr-3">
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
                            <select name="classification" id="classification" class="browser-default custom-select mr-3">
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
                            <select name="system" id="system" class="browser-default custom-select mr-3">
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
                            <select name="tasksUsed" id="tasksUsed" class="browser-default custom-select mr-3">
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
                            <select name="subtasksUsed" id="subtasksUsed" class="browser-default custom-select mr-3">
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
                            <select name="relatedFindings" id="relatedFindings" class="browser-default custom-select mr-3">
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
                            <select name="confidentiality" id="confidentiality-dropdown" class="browser-default custom-select mr-3">
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
                            <select name="integrity" id="integrity-dropdown" class="browser-default custom-select mr-3">
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
                            <select name="availability" id="availability-dropdown" class="browser-default custom-select mr-3">
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
                            <select name="analystInfo" id="analystInfo-dropdown" class="browser-default custom-select mr-3">
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
                            <select name="collaboratorInfo" id="collaboratorInfo-dropdown" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">Alex Vasquez</option>
                                <option value="Attachment2">Jacob Padilla</option>
                                <option value="Attachment3">Luis Soto</option>

                            </select>
                        </label><br></br>
                        <label for="Posture">
                            Posture:
                            <br></br>
                            <select name="postureInfo" id="postureInfo-dropdown" class="browser-default custom-select mr-3">
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
                        <label for="Posture">
                            Posture:
                            <br></br>
                            <select name="postureInfo" id="postureInfo-dropdown" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">Insider</option>
                                <option value="Attachment2">Insider-Nearsider</option>
                                <option value="Attachment3">Outsider</option>
                                <option value="Attachment2">Nearsider</option>
                                <option value="Attachment3">Nearsider-Outsider</option>
                            </select>
                        </label>

                        <h4>Mitigation</h4>
                        <label for="MitigationDescription">
                            Brief Description:
                            <br></br>
                            <input type="text" name="mitigationDescription" id="mitigationDescriptionInfo" class="browser-default  mr-3" />
                        </label><br />
                        <label for="LongDescription">
                            Long Description:
                            <br></br>
                            <textarea name="LongDescription" id="LongDescription" cols="45" rows="5" class="browser-default  mr-3"></textarea>
                        </label><br />

                        <h4>Threat Relevence</h4>
                        <label for="Relevence">
                            Threat Relevence:
                            <br></br>
                            <select name="relevenceInfo" id="relevenceInfo-dropdown" class="browser-default custom-select mr-3">
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
                            <select name="countermeasureInfo" id="countermeasureInfo-dropdown" class="browser-default custom-select mr-3">
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
                            <input type="text" name="impactDescription" id="impactDescriptionInfo" class="browser-default  mr-3" />
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Impact">
                            Impact:
                            <br></br>
                            <select name="impactInfo" id="impactInfo-dropdown" class="browser-default custom-select mr-3">
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
                            <input type="text" name="severityCategoryScoreDescription" id="severityCategoryScoreDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="VulnerabilitySeverityDescription">
                            Vulnerability Severity:
                            <br></br>
                            <input type="text" name="vulnerabilitySeverityDescription" id="vulnerabilitySeverityDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="QuantitativeVulnerabilityDescription">
                            Quantitative Vulnerability Severity:
                            <br></br>
                            <input type="text" name="quantitativeVulnerabilityDescription" id="quantitativeVulnerabilityDescriptionInfo" class="browser-default mr-3" />
                        </label><br></br>

                        <h4>Risk</h4>

                        <label for="RiskDescription">
                            Risk:
                            <br></br>
                            <input type="text" name="riskDescription" id="riskDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="LikelihoodDescription">
                            Likelihood:
                            <br></br>
                            <input type="text" name="likelihoodDescription" id="likelihoodDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <h4>Finding System Level Impact</h4>

                        <label for="CFISDescription">
                            Confidentiality Finding Impact on System:
                            <br></br>
                            <input type="text" name="CFISDescription" id="CFISDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="IFISDescription">
                            Integrity Finding Impact on System:
                            <br></br>
                            <input type="text" name="IFISDescription" id="IFISDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="AFISDescription">
                            Availability Finding Impact on System:
                            <br></br>
                            <input type="text" name="AFISDescription" id="AFISDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="ImpactScoreDescription">
                            Impact Score:
                            <br></br>
                            <input type="text" name="impactScoreDescription" id="impactScoreDescriptionInfo" class="browser-default  mr-3" />
                        </label><br></br>
                        <Button variant="dark" type="submit">
                            Save
                        </Button>
                        <Button variant="dark" type="submit">
                            Delete
                        </Button>
                        <Button variant="dark" type="submit" >
                            Cancel
                        </Button>
                    </form>
                </div>

            </div>

        );
    }
}

export default findingDetailedView;
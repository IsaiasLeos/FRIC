import * as React from 'react'
import Button from 'react-bootstrap/Button'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

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
            impactScore: '',
            activeTasks: ''
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
        const findingStatusType = [
            {
                label: "Open",
                value: "Open"
            },
            {
                label: "Closed",
                value: "Closed"
            },
        ];

       const activeTaskFields = this.props.finding.activeTasks; //array holding all of the task titles to use as dropdown

        const findingType = [
            {
                label: "Manufactuerer Default Creds",
                value: "Manufactuerer Default Creds"
            },
            {
                label: "Lack of Authentication",
                value: "Lack of Authentication"
            },
            {
                label: "Plain Text Protocol",
                value: "Plain Text Protocol"
            },
            {
                label: "Plain Text Web Login",
                value: "Plain Text Web Login"
            },
            {
                label: "Encryption",
                value: "Encryption"
            },
            {
                label: "Authentication Bypass",
                value: "Authentication Bypass"
            },
            {
                label: "Port Security",
                value: "Port Security"
            },
            {
                label: "Access Control",
                value: "Access Control"
            },
            {
                label: "Least Privilege",
                value: "Least Privilege"
            },
            {
                label: "Privilege Escalation",
                value: "Privilege Escalation"
            },
            {
                label: "Missing Patches",
                value: "Missing Patches"
            },
            {
                label: "Physical Security",
                value: "Physical Security"
            },
            {
                label: "Information Disclosure",
                value: "Information Disclosure"
            },
        ];
        
        
        


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
                            <input type="text" value={this.props.finding.ip_port} onChange={this.onChange}  name="ip_port" id="ipPort" class="browser-default  mr-3" />
                        </label><br></br>
                        <label for="Description">
                            Description:
                            <br></br>
                            <input type="text" value={this.props.finding.description} onChange={this.onChange} name="description" id="description" class="browser-default  mr-3" />
                        </label><br />

                        <label for="LongDescription">
                            Long Description:
                            <br></br>
                            <textarea name="longDescription" value={this.props.finding.longDescription} onChange={this.onChange} id="longDescription" cols="45" rows="5" class="browser-default  mr-3"></textarea>
                        </label><br />

                        <label for="Status">
                            Status:
                            <br></br>
                            <select name="findingStatus" defaultValue={this.props.finding.findingStatus} onChange={this.onChange} id="findingStatus" class="browser-default custom-select mr-3">
                                <option value="Open">Open</option>
                                <option value="Closed">Closed</option>
                                
                                
                            </select>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Type">
                            Type:
                            <br></br>
                            <select name="findingType" defaultValue={this.props.finding.findingType} onChange={this.onChange} id="findingType" class="browser-default custom-select mr-3">
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
                            <select name="findingClassification" value={this.props.finding.findingClassification} onChange={this.onChange} id="findingClassification" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                
                                <option value="Vulnerability">Vulnerability</option>
                                <option value="Information">Information</option>
                            </select>
                        </label><br />

                        <label for="fileName">
                            File:
                            <br></br>
                            <input type="text" name="activeTasks" value={this.props.finding.activeTasks} id="filename" class="browser-default mr-3" />
                            
                        </label><br />

                        <label for="system">
                            System:
                            <br></br>
                            <select name="findingSystem" value={this.props.finding.findingSystem} onChange={this.onChange} id="findingSystem" class="browser-default custom-select mr-3">
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
                            <ReactMultiSelectCheckboxes options={null} width="100%" name="activeTaskFields"/>
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Subtask">
                            Subtask(s):
                            <br></br>
                            <select name="findingSubtask" value={this.props.finding.findingSubtask} onChange={this.onChange} id="findingSubtask" class="browser-default custom-select mr-3">
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
                            <select name="relatedFindings" value={this.props.finding.relatedFindings} onChange={this.onChange} id="relatedFindings" class="browser-default custom-select mr-3">
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
                            <select name="findingConfidentiality" value={this.props.finding.findingConfidentiality} onChange={this.onChange} id="findingConfidentiality" class="browser-default custom-select mr-3">
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
                            <select name="findingIntegrity" value={this.props.finding.findingIntegrity} onChange={this.onChange} id="findingIntegrity" class="browser-default custom-select mr-3">
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
                            <select name="findingAvailability" value={this.props.finding.findingAvailability} onChange={this.onChange} id="findingAvailability" class="browser-default custom-select mr-3">
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
                            <select name="findingAnalyst" value={this.props.finding.findingAnalyst} onChange={this.onChange} id="findingAnalyst" class="browser-default custom-select mr-3">
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
                            <select name="findingCollaborators" value={this.props.finding.findingCollaborators} onChange={this.onChange} id="findingCollaborators" class="browser-default custom-select mr-3">
                                <option value="default" selected="selected"></option>
                                <option value="Alex Vasquez">Alex Vasquez</option>
                                <option value="Jacob Padilla">Jacob Padilla</option>
                                <option value="Luis Soto">Luis Soto</option>

                            </select>
                        </label><br></br>
                        <label for="Posture">
                            Posture:
                            <br></br>
                            <select name="findingPosture" value={this.props.finding.findingPosture} onChange={this.onChange} id="findingPosture" class="browser-default custom-select mr-3">
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
                            <input type="text" name="mitigationDesc" value={this.props.finding.mitigationDesc} onChange={this.onChange} id="mitigationDesc" class="browser-default  mr-3" />
                        </label><br />
                        <label for="LongDescription">
                            Long Description:
                            <br></br>
                            <textarea name="mitigationLongDesc" value={this.props.finding.mitigationLongDesc} onChange={this.onChange} id="mitigationLongDesc" cols="45" rows="5" class="browser-default  mr-3"></textarea>
                        </label><br />

                        <h4>Threat Relevence</h4>
                        <label for="Relevence">
                            Threat Relevence:
                            <br></br>
                            <select name="threatRelevence" value={this.props.finding.threatRelevence} onChange={this.onChange} id="threatRelevence" class="browser-default custom-select mr-3">
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
                            <select name="countermeasure" value={this.props.finding.countermeasure} onChange={this.onChange} id="countermeasure" class="browser-default custom-select mr-3">
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
                            <input type="text" name="impactDesc" value={this.props.finding.impactDesc} onChange={this.onChange} id="impactDesc" class="browser-default  mr-3" />
                        </label>
                        &nbsp;
                        &nbsp;
                        <label for="Impact">
                            Impact:
                            <br></br>
                            <select name="findingImpact" value={this.props.finding.findingImpact} onChange={this.onChange} id="findingImpact" class="browser-default custom-select mr-3">
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
                            <input type="text" name="severityCategoryScore" value={this.props.finding.severityCategoryScore} onChange={this.onChange} id="severityCategoryScore" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="VulnerabilitySeverityDescription">
                            Vulnerability Severity:
                            <br></br>
                            <input type="text" value={this.props.finding.vulnerabilityScore} onChange={this.onChange} name="vulnerabilityScore" id="vulnerabilityScore" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="QuantitativeVulnerabilityDescription">
                            Quantitative Vulnerability Severity:
                            <br></br>
                            <input type="text" name="quantitativeScore" value={this.props.finding.quantitativeScore} onChange={this.onChange} id="quantitativeScore" class="browser-default mr-3" />
                        </label><br></br>

                        <h4>Risk</h4>

                        <label for="RiskDescription">
                            Risk:
                            <br></br>
                            <input type="text" name="findingRisk" value={this.props.finding.findingRisk} onChange={this.onChange} id="findingRisk" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="LikelihoodDescription">
                            Likelihood:
                            <br></br>
                            <input type="text" name="findingLikelihood" value={this.props.finding.findingLikelihood} onChange={this.onChange} id="findingLikelihood" class="browser-default  mr-3" />
                        </label><br></br>

                        <h4>Finding System Level Impact</h4>

                        <label for="CFISDescription">
                            Confidentiality Finding Impact on System:
                            <br></br>
                            <input type="text" name="findingCFIS" value={this.props.finding.findingCFIS} onChange={this.onChange} id="findingCFIS" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="IFISDescription">
                            Integrity Finding Impact on System:
                            <br></br>
                            <input type="text" name="findingIFIS" value={this.props.finding.findingIFIS} onChange={this.onChange} id="findingIFIS" class="browser-default  mr-3" />
                        </label><br></br>

                        <label for="AFISDescription">
                            Availability Finding Impact on System:
                            <br></br>
                            <input type="text" name="findingAFIS" value={this.props.finding.findingAFIS} onChange={this.onChange} id="findingAFIS" class="browser-default  mr-3" />
                        </label><br></br>

                        

                        <label for="ImpactScoreDescription">
                            Impact Score:
                            <br></br>
                            <input type="text" name="impactDesc" value={this.props.finding.impactDesc} onChange={this.onChange} id="impactDesc" class="browser-default  mr-3" />
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
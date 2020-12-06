import * as React from 'react'
import '../assets/css/bootstrap.css'
import SystemContentView from '../systemcontentview/systemContentView'
import GeneralView from '../generalView/generalView'
import TaskContentView from '../taskcontentview/taskContentView'
import SubtaskContentView from '../subtaskContentView/subtaskContentView'
import FindingContentView from '../findingscontentview/findingContentView'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Tree from '../eventTree/eventTree'
class analystSummaryView extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            sysInfo: "",
            sysDesc: "",
            sysLoc: "",
            sysRouter: "",
            sysSwitch: "",
            sysRoom: "",
            sysTestPlan: "",
            Confidentiality: "",
            Integrity: "",
            Availability: "",
            num_task: "",
            num_findings: "",
            progress: "",
        };

        this.state1 = {
            data: [],
            id: '',
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
            impactLevel: '',
            severityCategoryScore: '',
            vulnerabilityScore: '',
            quantitativeScore: '',
            findingRisk: '',
            findingLikelihood: '',
            findingCFIS: '',
            findingIFIS: '',
            findingAFIS: '',
            impactScore: '',
            activeTasks: '',
            findingFiles: '',
            severityCategoryCode: '',
            systemID: '',
            taskID: '',
            subtaskID: '',
            analyst: '',
        };


        this.state2 = {
            data: [],
            subtaskTitle: "",
            subtaskDescription: "",
            subtaskProgress: "",
            subtaskDueDate: "",
            analysts: "",
            collaborators: "",
            relatedTask: "",
            subtasks: "",
            attachments: "",
            numFindings: "",
            analyst: "",
            task: "",
            taskID: ""
        };

        this.state3 = {
            data: [],
            id: "",
            taskTitle: "",
            taskDescription: "",
            system: "",
            taskPriority: "",
            taskProgress: "",
            taskDueDate: "",
            taskAnalysts: "",
            taskCollaborators: "",
            relatedTasks: "",
            attachments: "",
            subtaskID: "",
            systemID: '',
        };
        this.updateData = this.updateData.bind();
        this.progress = 0;
    }

    updateData() {
        fetch('/getsystem').then(
            response => response.json()).then(data => this.setState({
                data: data
            })).catch(error => console.error(error));
        fetch('/subtasks').then(
            response => response.json()).then(data => this.setState({
                data: data
            })).catch(error => console.error(error));
        fetch('/tasks').then(
            response => response.json()).then(data => this.setState({
                data: data
            })).catch(error => console.error(error));
        fetch('/analystFindings').then(
            response => response.json()).then(data => this.setState({
                data: data
            })).catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <GeneralView />
                <div className="main">
                    <div id="tableSummary">
                        <h1>Analyst Progress Summary View</h1>
                        <div id="systemTable">
                            <SystemContentView
                                data={this.state.data}
                                updateData={this.updateData} />
                        </div>

                        <div id="taskTable">
                            <TaskContentView
                                data={this.state3.data}
                                updateData={this.updateData} />
                        </div>
                        <div id="subtaskTable">
                            <SubtaskContentView
                                data={this.state2.data}
                                updateData={this.updateData} />
                        </div>

                        <div id="findingTable">
                            <FindingContentView
                                data={this.state1.data}
                                updateData={this.updateData} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default analystSummaryView;
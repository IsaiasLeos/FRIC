import * as React from 'react'
// import Table from 'react-bootstrap/Table'
import '../assets/css/bootstrap.css'
// import SortImage from '../assets/updownarrow.png'
// import Tree from '../eventTree/eventTree'
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
        this.progress = 0;
        this.updateData = this.updateData.bind(this);
    }

    updateData() {
        fetch('/getsystem').then(
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
                            <Progress percent={this.progress} status="success" />
                            <SystemContentView
                                data={this.state.data}
                                updateData={this.updateData}
                            />
                        </div>

                        <div id="taskTable">
                            <Progress percent={this.progress} status="success" />
                            <TaskContentView
                            />
                        </div>
                        <div id="subtaskTable">
                            <Progress percent={this.progress} status="success" />
                            <SubtaskContentView />
                        </div>

                        <div id="findingTable">
                            <Progress percent={this.progress} status="success" />
                            <FindingContentView />
                        </div>
                    </div>
                    <div className="right-tree">
                        <Tree />
                    </div>
                </div>
            </div>
        );
    }
}
export default analystSummaryView;
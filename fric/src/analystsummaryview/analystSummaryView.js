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

class analystSummaryView extends React.Component {
    constructor() {
        super();
        this.flag = false;
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
                            <SystemContentView
                                data={this.state.data}
                                updateData={this.updateData}
                            />
                        </div>

                        <div id="taskTable">
                            <TaskContentView
                            />
                        </div>
                        <div id="subtaskTable">
                            <SubtaskContentView />
                        </div>

                        <div id="findingTable">
                            <FindingContentView />
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default analystSummaryView;
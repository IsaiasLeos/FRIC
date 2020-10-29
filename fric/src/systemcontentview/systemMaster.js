import React from 'react';
import SystemContentView from './systemContentView';
import Tree from '../eventTree/eventTree'
import GeneralView from '../generalView/generalView'
class SystemMaster extends React.Component {
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
                <SystemContentView
                    data={this.state.data}
                    updateData={this.updateData}
                />
                <div className="right-tree">
                    <Tree />
                </div>
            </div>
        );
    }
}

export default SystemMaster
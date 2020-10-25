import React from 'react';
import SystemContentView from './systemContentView';
import SystemDetailedView from './systemDetailedView';

class SystemMaster extends React.Component {
    constructor(props) {
        super(props);

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
            progress: ""
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
                <SystemContentView
                    data={this.state.data}
                    updateData={this.updateData}
                />
                <SystemDetailedView
                    data={this.state.data}
                    updateData={this.updateData}
                />
            </div>
        );
    }
}

export default SystemMaster
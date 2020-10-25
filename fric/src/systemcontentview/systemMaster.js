import React from 'react';
import SystemContentView from './systemContentView';
import SystemDetailedView from './systemDetailedView';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class SystemMaster extends React.Component {
    constructor(props) {
        super(props);
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
        this.enableModal = this.enableModal.bind(this);
        this.disableModal = this.disableModal.bind(this);
    }
    enableModal() {
        this.flag = true;
    }

    disableModal() {
        this.flag = false;
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
                    enableModal={this.enableModal}
                    disableModal={this.disableModal}
                    flag={this.flag}
                />
                <Modal show={this.flag}  >
                    <Modal.Header>
                        <Modal.Title>
                            System Detailed View
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SystemDetailedView
                            data={this.state.data}
                            updateData={this.updateData}
                            enableModal={this.enableModal}
                            disableModal={this.disableModal}
                            flag={this.flag}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="button-input-group">
                            <Button variant="outline-dark" type="submit" className="btn cancel" onClick={this.disableModal()}>Cancel </Button>
                            <Button variant="outline-dark" type="submit" className="btn" onClick={this.disableModal()}>Submit </Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default SystemMaster
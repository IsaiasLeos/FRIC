import * as React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
class systemDetailedView extends React.Component {
    constructor() {
        super();
        this.state = {
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
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { sysInfo, sysDesc, sysLoc, sysRouter, sysSwitch, sysRoom, sysTestPlan, Confidentiality, Integrity, Availability, num_task, num_findings, progress } = this.state;
        fetch('/addsystem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sysInfo, sysDesc, sysLoc, sysRouter, sysSwitch, sysRoom, sysTestPlan, Confidentiality, Integrity, Availability, num_task, num_findings, progress }),
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
            <div><div class="systemDetailedTable" id="systemDetailedTable">
                <h3>System Information</h3>
                <div class="input-group">
                    <form class="input-form" onSubmit={this.onSubmit}>
                        <div class="left-input-group">
                            <input type="text" value={this.state.sysInfo} onChange={this.onChange} name="sysInfo" class="form-control browser-default mr-3" placeholder="System Information" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <textarea type="text" value={this.state.sysDesc} onChange={this.onChange} name="sysDesc" class="form-control mr-3" placeholder="System Description" aria-label="System Description" aria-describedby="basic-addon2"></textarea>
                        &nbsp;
                        <input type="text" value={this.state.sysLoc} onChange={this.onChange} name="sysLoc" class="form-control mr-3" placeholder="System Location" aria-label="System Location" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        </div>
                        <div class="right-input-group">
                            <input type="text" value={this.state.sysRouter} onChange={this.onChange} name="sysRouter" class="form-control mr-3" placeholder="System Router" aria-label="System Router" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" value={this.state.sysSwitch} onChange={this.onChange} name="sysSwitch" class="form-control mr-3" placeholder="System Switch" aria-label="System Switch" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" value={this.state.sysRoom} onChange={this.onChange} name="sysRoom" class="form-control mr-3" placeholder="System Room" aria-label="System Room" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" value={this.state.sysTestPlan} onChange={this.onChange} name="sysTestPlan" class="form-control mr-3" placeholder="Test Plan" aria-label="Test Plan" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        </div>
                        <h3>System Categorization</h3>
                        <div class="btn-group">
                            <select class="browser-default custom-select mr-3">
                                <option selected>Confidentiality</option>
                                <option >Low</option>
                                <option >Medium</option>
                                <option >High</option>
                            </select>
                        </div>
                        <div class="btn-group">
                            <select class="browser-default custom-select mr-3">
                                <option selected>Integrity</option>
                                <option >Low</option>
                                <option >Medium</option>
                                <option >High</option>
                            </select>
                        </div>
                        <div class="btn-group">
                            <select class="browser-default custom-select mr-3">
                                <option selected>Availability</option>
                                <option >Low</option>
                                <option >Medium</option>
                                <option >High</option>
                            </select>
                        </div>
                    &nbsp;
                    <div>
                            <br />
                            <ButtonGroup>
                                <Button variant="outline-dark">Cancel </Button>
                                <Button variant="outline-dark" type="submit">Submit </Button>
                            </ButtonGroup>
                        </div>

                    </form>
                </div>

            </div>

            </div>

        );
    }
}

export default systemDetailedView;
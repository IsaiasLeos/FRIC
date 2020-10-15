import * as React from 'react';
import Button from 'react-bootstrap/Button';

function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();  
    let time = newDate.toTimeString()
    let check = '';
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}

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
        this.action = {
            date: "",
            action: "",
            analyst: ""
        }
    }
    handleEventType(e) {
        console.log(e.target.value);
    }
    handleEventClass(e) {
        console.log(e.target.value);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        this.action.action = "submit system";
        this.action.date = getCurrentDate("/");
        this.action.analyst = "";
        e.preventDefault();
        fetch('/addsystem', {
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
        fetch('/addlog', {
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
            <div><div class="systemDetailedTable" id="systemDetailedTable">
                <h3>System Information</h3>
                <div class="input-group">
                    <form class="input-form" onSubmit={this.onSubmit}>
                        <div class="left-input-group">
                            <input type="text" value={this.props.system.sysInfo} onChange={this.onChange} name="sysInfo" class="form-control browser-default mr-3" placeholder="System Information" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <textarea type="text" value={this.props.system.sysDesc} onChange={this.onChange} name="sysDesc" class="form-control mr-3" placeholder="System Description" aria-label="System Description" aria-describedby="basic-addon2"></textarea>
                        &nbsp;
                        <input type="text" value={this.props.system.sysLoc} onChange={this.onChange} name="sysLoc" class="form-control mr-3" placeholder="System Location" aria-label="System Location" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        </div>
                        <div class="right-input-group">
                            <input type="text" value={this.props.system.sysRouter} onChange={this.onChange} name="sysRouter" class="form-control mr-3" placeholder="System Router" aria-label="System Router" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" value={this.props.system.sysSwitch} onChange={this.onChange} name="sysSwitch" class="form-control mr-3" placeholder="System Switch" aria-label="System Switch" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" value={this.props.system.sysRoom} onChange={this.onChange} name="sysRoom" class="form-control mr-3" placeholder="System Room" aria-label="System Room" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" value={this.props.system.sysTestPlan} onChange={this.onChange} name="sysTestPlan" class="form-control mr-3" placeholder="Test Plan" aria-label="Test Plan" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        </div>
                        <h3>System Categorization</h3>
                        <div class="btn-group">
                            <select class="browser-default custom-select mr-3" name="Confidentiality" onChange={this.onChange} value={this.props.system.Confidentiality}>
                                <option selected>Confidentiality</option>
                                <option >Low</option>
                                <option >Medium</option>
                                <option >High</option>
                            </select>
                        </div>
                        <div class="btn-group">
                            <select class="browser-default custom-select mr-3" name="Integrity" onChange={this.onChange} value={this.props.system.Integrity}>
                                <option selected>Integrity</option>
                                <option >Low</option>
                                <option >Medium</option>
                                <option >High</option>
                            </select>
                        </div>
                        <div class="btn-group">
                            <select class="browser-default custom-select mr-3" name="Availability" onChange={this.onChange} value={this.props.system.Availability}>
                                <option selected>Availability</option>
                                <option >Low</option>
                                <option >Medium</option>
                                <option >High</option>
                            </select>
                        </div>

                        <div class="button-input-group">
                            <form onSubmit> {/*For some reason, this closes the modal*/}
                                <Button variant="outline-dark" type="submit" class="btn cancel">Cancel </Button>
                            </form>
                            <Button variant="outline-dark" type="submit" class="btn">Submit </Button>
                        </div>
                    </form>
                </div>

            </div>

            </div>

        );
    }
}

export default systemDetailedView;
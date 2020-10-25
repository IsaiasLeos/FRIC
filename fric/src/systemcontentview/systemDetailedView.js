import * as React from 'react';
import Button from 'react-bootstrap/Button'
import { Card, Accordion } from 'react-bootstrap'
function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.toTimeString()
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
        this.SendData = this.SendData.bind(this);
        this.SendLog = this.SendLog.bind(this);
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

    SendData(e) {
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
        this.SendLog(e);
    }

    SendLog(e) {
        e.preventDefault();
        this.action.action = "submit system";
        this.action.date = getCurrentDate("/");
        this.action.analyst = "";
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
            <div>
                <div className="systemDetailedTable" id="systemDetailedTable">
                    <Accordion defaultActiveKey="1">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Click to toggle System detailed view
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="cardBackground label">
                                    <h3>System Information</h3>
                                    <div className="input-group">
                                        <form className="input-form" onSubmit={this.SendData}>

                                            <input type="text" onChange={this.onChange} name="sysInfo" className="form-control browser-default mr-3" placeholder="System Information" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <textarea type="text" onChange={this.onChange} name="sysDesc" className="form-control mr-3" placeholder="System Description" aria-label="System Description" aria-describedby="basic-addon2"></textarea>
                        &nbsp;
                        <input type="text" onChange={this.onChange} name="sysLoc" className="form-control mr-3" placeholder="System Location" aria-label="System Location" aria-describedby="basic-addon2"></input>
                        &nbsp;


                                                <input type="text" onChange={this.onChange} name="sysRouter" className="form-control mr-3" placeholder="System Router" aria-label="System Router" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" onChange={this.onChange} name="sysSwitch" className="form-control mr-3" placeholder="System Switch" aria-label="System Switch" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" onChange={this.onChange} name="sysRoom" className="form-control mr-3" placeholder="System Room" aria-label="System Room" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" onChange={this.onChange} name="sysTestPlan" className="form-control mr-3" placeholder="Test Plan" aria-label="Test Plan" aria-describedby="basic-addon2"></input>
                        &nbsp;

                                            <h3>System Categorization</h3>
                                            <div className="btn-group">
                                                <select className="browser-default custom-select mr-3" name="Confidentiality" onChange={this.onChange} >
                                                    <option defaultValue>Confidentiality</option>
                                                    <option >Low</option>
                                                    <option >Medium</option>
                                                    <option >High</option>
                                                </select>
                                            </div>
                                            <div className="btn-group">
                                                <select className="browser-default custom-select mr-3" name="Integrity" onChange={this.onChange} >
                                                    <option defaultValue>Integrity</option>
                                                    <option >Low</option>
                                                    <option >Medium</option>
                                                    <option >High</option>
                                                </select>
                                            </div>
                                            <div className="btn-group">
                                                <select className="browser-default custom-select mr-3" name="Availability" onChange={this.onChange} >
                                                    <option defaultValue>Availability</option>
                                                    <option >Low</option>
                                                    <option >Medium</option>
                                                    <option >High</option>
                                                </select>
                                            </div>

                                            <div className="button-input-group">
                                                <Button variant="outline-dark" type="submit" className="btn cancel">Cancel </Button>
                                                <Button variant="outline-dark" type="submit" className="btn">Submit </Button>
                                            </div>
                                        </form>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>

            </div>

        );
    }
}

export default systemDetailedView;
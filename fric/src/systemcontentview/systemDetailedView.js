import * as React from 'react';
import Button from 'react-bootstrap/Button'
import { useState, } from 'react';
function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.toTimeString()
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}

function SystemDetailedView(props) {

    const [sysInfo, setName] = useState('');
    const [sysDesc, setDesc] = useState('');
    const [sysLoc, setLocation] = useState('');
    const [sysRouter, setRouter] = useState('');
    const [sysSwitch, setSwitch] = useState('');
    const [sysRoom, setRoom] = useState('');
    const [sysTestPlan, setTestPlan] = useState('');
    const [confidentiality, setConfidentiality] = useState('');
    const [integrity, setIntegrity] = useState('');
    const [availability, setAvailability] = useState('');

    let state = {
        sysInfo: sysInfo,
        sysDesc: sysDesc,
        sysLoc: sysLoc,
        sysRouter: sysRouter,
        sysSwitch: sysSwitch,
        sysRoom: sysRoom,
        sysTestPlan: sysTestPlan,
        Confidentiality: confidentiality,
        Integrity: integrity,
        Availability: availability,
        num_task: "",
        num_findings: "",
        progress: ""
    };
    let action = {
        date: "",
        action: "",
        analyst: ""
    }

    function SendData(e) {
        e.preventDefault();
        fetch('/addsystem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        }).then(response => response.json())
            .then(data => {
                console.log("Success", data);
            })
            .catch(error => {
                console.error('Error', error)
            });
        SendLog(e);
        props.closeDetailAction();
    }

    function closeOnCancel() {
        props.closeDetailAction()
    }

    function SendLog(e) {
        e.preventDefault();
        action.action = "submit system";
        action.date = getCurrentDate("/");
        action.analyst = "";
        fetch('/addlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action),
        }).then(response => response.json())
            .then(data => {
                console.log("Success", data);
            })
            .catch(error => {
                console.error('Error', error)
            });
    }

    return (
        <div>
            <div className="systemDetailedTable" id="systemDetailedTable">
                <div className="title-buttons"></div>

                <h3>System Information</h3>
                <div className="input-group">
                    <form className="input-form" onSubmit={SendData} onReset="">
                        <input type="text" onChange={e => setName(e.target.value)} name="sysInfo" className="form-control browser-default mr-3" placeholder="System Information" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <textarea type="text" onChange={e => setDesc(e.target.value)} name="sysDesc" className="form-control mr-3" placeholder="System Description" aria-label="System Description" aria-describedby="basic-addon2"></textarea>
                            &nbsp;
                            <input type="text" onChange={e => setLocation(e.target.value)} name="sysLoc" className="form-control mr-3" placeholder="System Location" aria-label="System Location" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <input type="text" onChange={e => setRouter(e.target.value)} name="sysRouter" className="form-control mr-3" placeholder="System Router" aria-label="System Router" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <input type="text" onChange={e => setSwitch(e.target.value)} name="sysSwitch" className="form-control mr-3" placeholder="System Switch" aria-label="System Switch" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <input type="text" onChange={e => setRoom(e.target.value)} name="sysRoom" className="form-control mr-3" placeholder="System Room" aria-label="System Room" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <input type="text" onChange={e => setTestPlan(e.target.value)} name="sysTestPlan" className="form-control mr-3" placeholder="Test Plan" aria-label="Test Plan" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <h3>System Categorization</h3>
                        <div className="btn-group">
                            <select className="browser-default custom-select mr-3" name="Confidentiality" onChange={e => setConfidentiality(e.target.value)} >
                                <option defaultValue>Confidentiality</option>
                                <option >Low</option>
                                <option >Medium</option>
                                <option >High</option>
                            </select>
                        </div>
                        <div className="btn-group">
                            <select className="browser-default custom-select mr-3" name="Integrity" onChange={e => setIntegrity(e.target.value)}>
                                <option defaultValue>Integrity</option>
                                <option >Low</option>
                                <option >Medium</option>
                                <option >High</option>
                            </select>
                        </div>
                        <div className="btn-group">
                            <select className="browser-default custom-select mr-3" name="Availability" onChange={e => setAvailability(e.target.value)} >
                                <option defaultValue>Availability</option>
                                <option >Low</option>
                                <option >Medium</option>
                                <option >High</option>
                            </select>
                        </div>
                        <div className="button-input-group">
                            <Button variant="outline-dark" className="btn cancel" onClick={closeOnCancel}>Cancel </Button>
                            <Button variant="outline-dark" type="submit" className="btn">Submit </Button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    );

}

export default SystemDetailedView;
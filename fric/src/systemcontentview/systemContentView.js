import * as React from 'react'
import { useState } from "react";
import Table from 'react-bootstrap/Table'
import './systemView.css'
import SortImage from '../assets/updownarrow.png'
import GeneralView from '../generalView/generalView'
import Button from 'react-bootstrap/Button'
import SystemDetailedView from './systemDetailedView'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Tree from '../eventTree/eventTree'
import { useEffect } from "react";

function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.toTimeString()
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}

class SystemContentView extends React.Component {
    constructor(props) {
        super(props);
    }

    sendLog(a) {
        let action = {
            date: getCurrentDate("/"),
            action: a,
            analyst: ""
        }
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

    componentDidMount() {
        this.props.updateData();
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
        this.props.updateData();
        this.SendLog(e);
    }

    render() {
        return (

            <div >
                <GeneralView />
                <div className="main">
                    <div className="SystemContentView">
                        <div id="systemTable" update={this.props.updateSystemData}>
                            <div className="title-buttons">
                                <h2>System Overview Table</h2>
                                <ButtonGroup dialogclassname="title-system-buttons">
                                    <Button variant="dark" >Archive</Button>
                                    <Button variant="dark" onSubmit={this.SendData}>Add</Button>
                                </ButtonGroup>
                            </div>
                            <Table bordered hover striped>
                                <thead className="thead-grey">
                                    <tr>
                                        <th>Select</th>
                                        <th>System<input type="image" src={SortImage} alt="Sort Button" className="sort-button" /></th>
                                        <th>No. of Task<input type="image" src={SortImage} alt="Sort Button" className="sort-button" /></th>
                                        <th>No. Findings<input type="image" src={SortImage} alt="Sort Button" className="sort-button" /></th>
                                        <th>Progress<input type="image" src={SortImage} alt="Sort Button" className="sort-button" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.data.map((state) => (
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td><Button variant="outline-dark">{state.sysInfo}</Button></td>
                                            <td>{state.num_task}</td>
                                            <td>{state.num_findings}</td>
                                            <td>{state.prog}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default SystemContentView;
import * as React from 'react';
import HelpImage from '../assets/help.png';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
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
class subtaskDetailedView extends React.Component {
    constructor() {
        super();
        this.state = {
            subtaskTitle: "",
            subtaskDescription: "",
            subtaskProgress: "",
            subtaskDueDate: "",
            analysts: "",
            collaborators: "",
            relatedTask: "",
            subtasks: "",
            attachments: "",
            numFindings: "",
            analyst: "", 
            task: "" 
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
        this.action.action = "submit subtask";
        this.action.date = getCurrentDate("/");
        this.action.analyst = "";
        e.preventDefault();
        fetch('/addsubtask', {
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
        const analysts = [
            { label: 'Analyst 1', value: 1},
            { label: 'Analyst 2', value: 2},
            { label: 'Analyst 3', value: 3},
            { label: 'Analyst 4', value: 4},
            { label: 'Analyst 5', value: 5},
        ];
        const collaborators = [
            { label: 'Collaborator 1', value: 1},
            { label: 'Collaborator 2', value: 2},
            { label: 'Collaborator 3', value: 3},
            { label: 'Collaborator 4', value: 4},
            { label: 'Collaborator 5', value: 5},
        ];
        const tasks = [
            { label: 'Task 1', value: 1},
            { label: 'Task 2', value: 2},
            { label: 'Task 3', value: 3},
            { label: 'Task 4', value: 4},
            { label: 'Task 5', value: 5},
        ];
        const subtasks = [
            { label: 'Subtask 1', value: 1},
            { label: 'Subtask 2', value: 2},
            { label: 'Subtask 3', value: 3},
            { label: 'Subtask 4', value: 4},
            { label: 'Subtask 5', value: 5},
        ];

        const attachments = [
            { label: 'Attachment 1', value: 1},
            { label: 'Attachment 2', value: 2},
            { label: 'Attachment 3', value: 3},
            { label: 'Attachment 4', value: 4},
            { label: 'Attachment 5', value: 5},
        ];
        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit} className="subtask-form">
                        <div className="left">
                        <input type="image" src={HelpImage} alt="Help button"/>
                            <label htmlFor="subtaskTitle">
                                Title:<br/>
                                <input type="text" value={this.props.subtask.subtaskTitle} onChange={this.onChange} name="subtaskTitle" id="subtask-title" className="subtask-data"/>
                            </label><br/>
                            <label htmlFor="subtaskDescription">
                                Description:<br/>
                                <input type="text" value={this.props.subtask.subtaskDescription} onChange={this.onChange} name="subtaskDescription" id="description" className="subtask-data"/>
                            </label><br/>
                            <label htmlFor="subtaskProgress">
                                Progress:<br/>
                                <select value={this.props.subtask.subtaskProgress} onChange={this.onChange} name="subtaskProgress" id="progress-dropdown" className="subtask-data">
                                    <option value="default" selected="selected"></option>
                                    <option value="notStarted">Not started</option>
                                    <option value="assigned">Assigned</option>
                                    <option value="transfered">Transfered</option>
                                    <option value="inProgress">In progress</option>
                                    <option value="complete">Complete</option>
                                    <option value="notApplicable">Not applicable</option>
                                </select>
                            </label><br/>
                            <label htmlFor="subtaskDuedate">
                                Due Date:<br/>
                                <input type="date" id="due-date" value={this.props.subtask.subtaskDueDate} onChange={this.onChange} name="subtaskDueDate" className="subtask-data"/>
                            </label><br/>
                        </div>
                        <div className="right">
                            <label htmlFor="subtaskAnalysts">
                                Analyst(s):<br/>
                                <ReactMultiSelectCheckboxes options={analysts} width="100%" value={this.props.subtask.analysts} onChange={this.onChange}  name="analysts"/>
                            </label>
                            <label htmlFor="subtaskCollaborators">
                                Collaborator(s):<br/>
                                <ReactMultiSelectCheckboxes options={collaborators} width="100%" value={this.props.subtask.collaborators} onChange={this.onChange} name="collaborators" />
                            </label><br/>
                            <label htmlFor="tasks">
                                Related task(s):<br/>
                                <ReactMultiSelectCheckboxes options={tasks} width="100%" value={this.props.subtask.relatedTask} onChange={this.onChange} name="relatedTask" />
                            </label><br/>
                            <label htmlFor="subtasks">
                                Subtask(s):<br/>
                                <ReactMultiSelectCheckboxes options={subtasks} width="100%" value={this.props.subtask.subtasks} onChange={this.onChange} name="subtasks" />
                            </label><br/>
                            <label htmlFor="attachments">
                                Attachments:<br/>
                                <ReactMultiSelectCheckboxes options={attachments} width="100%" value={this.props.subtask.attachments} onChange={this.onChange} name="attachments"/>
                            </label><br/>
                        </div>
                        <div class="button-input-group">
                            <form onSubmit> 
                                <Button variant="outline-dark" type="submit" class="btn cancel">Cancel </Button>
                            </form>
                            <Button variant="outline-dark" type="submit" class="btn">Submit </Button>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}


export default subtaskDetailedView;
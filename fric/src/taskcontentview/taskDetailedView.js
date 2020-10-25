import * as React from 'react'
import HelpImage from '../assets/help.png'
import Button from 'react-bootstrap/Button';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.toTimeString()
    let check = '';
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}
class taskDetailedView extends React.Component {
    constructor() {
        super();
        this.state = { 
            taskTitle: '', 
            taskDescription: '', 
            system: '', 
            taskPriority: '', 
            taskProgress: '', 
            taskDueDate: '', 
            taskAnalysts: '', 
            taskCollaborators: '', 
            relatedTasks: '', 
            attachments: '' 
        };
        this.action = {
            date: "",
            action: "",
            analyst: ""
        };
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
        this.action.action = "submit task";
        this.action.date = getCurrentDate("/");
        this.action.analyst = "";
        e.preventDefault();
        fetch('/addtask', {
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
        const attachments = [
            { label: 'Attachment 1', value: 1},
            { label: 'Attachment 2', value: 2},
            { label: 'Attachment 3', value: 3},
            { label: 'Attachment 4', value: 4},
            { label: 'Attachment 5', value: 5},
        ];
        return (
            <div>
                <div className="task-details" >
                    
                    <form className="task-form" onSubmit={this.onSubmit}>
                        <div className="left">
                            <input type="image" src={HelpImage} alt="Help button" />
                            <label htmlFor="taskTitle">
                                Title:<br/>
                                <input type="text" value={this.props.task.taskTitle} onChange={this.onChange} name="taskTitle" id="task-title" className="task-data" />
                            </label><br />
                            <label htmlFor="taskDescription">
                                Description:<br/>
                                <input type="text" value={this.props.task.taskDescription} onChange={this.onChange} name="taskDescription" id="description" className="task-data" />
                            </label><br/>
                            <label htmlFor="taskSystem">
                                System:<br/>
                                <select value={this.props.task.system} onChange={this.onChange} name="system" id="system-dropdown" className="task-data">
                                    <option value="default" selected="selected"></option>
                                    <option value="System1">System 1</option>
                                    <option value="System2">System 2</option>
                                    <option value="System3">System 3</option>
                                    <option value="System4">System 4</option>
                                </select>
                            </label><br/>
                            <label htmlFor="taskPriority">
                                Priority:<br/>
                                <select value={this.props.task.taskPriority} onChange={this.onChange} name="taskPriority" id="priority-dropdown" className="task-data">
                                    <option value="default" selected="selected"></option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">Hight</option>
                                </select>
                            </label><br/>
                            <label htmlFor="taskProgress">
                                Progress:<br/>
                                <select value={this.props.task.taskProgress} onChange={this.onChange} name="taskProgress" id="progress-dropdown" className="task-data">
                                    <option value="default" selected="selected"></option>
                                    <option value="notStarted">Not started</option>
                                    <option value="assigned">Assigned</option>
                                    <option value="transfered">Transfered</option>
                                    <option value="inProgress">In progress</option>
                                    <option value="complete">Complete</option>
                                    <option value="notApplicable">Not applicable</option>
                                </select>
                            </label><br/>
                        </div>
                        <div className="right">
                            <label htmlFor="taskDueDate">
                                Due Date:<br/>
                                <input value={this.props.task.taskDueDate} onChange={this.onChange} type="date" id="due-date" name="taskDueDate" />
                            </label><br/>
                            <label htmlFor="taskAnalysts">
                                Analyst(s):<br/>
                                <ReactMultiSelectCheckboxes options={analysts} width="100%"  name="taskAnalysts"/>
                            </label><br/>
                            <label htmlFor="taskCollaborators">
                                Collaborator(s):<br/>
                                <ReactMultiSelectCheckboxes options={collaborators} width="100%" name="taskCollaborators"/>
                            </label><br/>
                            <label htmlFor="relatedTask">
                                Related Task:<br/>
                                <ReactMultiSelectCheckboxes options={tasks}  width="100%" name="relatedTasks"/>
                            </label><br/>
                            <label htmlFor="attachments">
                                Attachments:<br/>
                                <ReactMultiSelectCheckboxes options={attachments} width="100%" name="attachments"/>
                            </label><br/>
                            
                            <div class="button-input-group">
                                <form onSubmit> {/*For some reason, this closes the modal*/}
                                    <Button variant="outline-dark" type="submit" class="btn cancel">Cancel </Button>
                                </form>
                                <Button variant="outline-dark" type="submit" class="btn">Submit </Button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        );
    }
}

export default taskDetailedView;
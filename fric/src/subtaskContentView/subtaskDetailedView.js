import * as React from 'react'
import HelpImage from '../assets/help.png'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

class subtaskDetailedView extends React.Component {
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
                    <form action="" className="form" className="subtask-form">
                        <div className="left">
                        <input type="image" src={HelpImage} alt="Help button"/>
                            <label htmlFor="subtaskTitle">
                                Title:<br/>
                                <input type="text" name="Title" id="subtask-title" className="subtask-data"/>
                            </label><br/>
                            <label htmlFor="subtaskDescription">
                                Description:<br/>
                                <input type="text" name="Description" id="description" className="subtask-data"/>
                            </label><br/>
                            <label htmlFor="subtaskProgress">
                                Progress:<br/>
                                <select name="progress" id="progress-dropdown" className="subtask-data">
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
                                <input type="date" id="due-date" name="dueDate" className="subtask-data"/>
                            </label><br/>
                        </div>
                        <div className="right">
                            <label htmlFor="subtaskAnalysts">
                                Analyst(s):<br/>
                                <ReactMultiSelectCheckboxes options={analysts} width="100%" />
                            </label>
                            <label htmlFor="subtaskCollaborators">
                                Collaborator(s):<br/>
                                <ReactMultiSelectCheckboxes options={collaborators} width="100%"/>
                            </label><br/>
                            <label htmlFor="tasks">
                                Related task(s):<br/>
                                <ReactMultiSelectCheckboxes options={tasks} width="100%"/>
                            </label><br/>
                            <label htmlFor="subtasks">
                                Subtask(s):<br/>
                                <ReactMultiSelectCheckboxes options={subtasks} width="100%"/>
                            </label><br/>
                            <label htmlFor="attachments">
                                Attachments:<br/>
                                <ReactMultiSelectCheckboxes options={attachments} width="100%"/>
                            </label><br/>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}


export default subtaskDetailedView;
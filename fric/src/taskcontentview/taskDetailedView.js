import * as React from 'react'
import HelpImage from '../assets/help.png'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

class taskDetailedView extends React.Component {
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
                <div className="task-details">
                    <input type="image" src={HelpImage} alt="Help button" />
                    <form action="" className="task-form">
                        <div className="left">
                            <label for="taskTitle">
                                Title:<br/>
                                <input type="text" name="Title" id="task-title" className="task-data" />
                            </label><br />
                            <label for="taskDescription">
                                Description:<br/>
                                <input type="text" name="Description" id="description" className="task-data" />
                            </label><br/>
                            <label for="taskSystem">
                                System:<br/>
                                <select name="System" id="system-dropdown" className="task-data">
                                    <option value="default" selected="selected"></option>
                                    <option value="System1">System 1</option>
                                    <option value="System2">System 2</option>
                                    <option value="System3">System 3</option>
                                    <option value="System4">System 4</option>
                                </select>
                            </label><br/>
                            <label for="taskPriority">
                                Priority:<br/>
                                <select name="priority" id="priority-dropdown" className="task-data">
                                    <option value="default" selected="selected"></option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">Hight</option>
                                </select>
                            </label><br/>
                            <label for="taskProgress">
                                Progress:<br/>
                                <select name="progress" id="progress-dropdown" className="task-data">
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
                            <label for="taskDueDate">
                                Due Date:<br/>
                                <input type="date" id="due-date" name="dueDate" />
                            </label><br/>
                            <label for="taskAnalysts">
                                Analyst(s):<br/>
                                <ReactMultiSelectCheckboxes options={analysts} />
                            </label><br/>
                            <label for="taskCollaborators">
                                Collaborator(s):<br/>
                                <ReactMultiSelectCheckboxes options={collaborators} />
                            </label><br/>
                            <label for="relatedTask">
                                Related Task:<br/>
                                <ReactMultiSelectCheckboxes options={tasks} />
                            </label><br/>
                            <label for="attachments">
                                Attachments:<br/>
                                <ReactMultiSelectCheckboxes options={attachments} />
                            </label><br/>
                        </div>
                    </form>
                </div>

            </div>

        );
    }
}

export default taskDetailedView;
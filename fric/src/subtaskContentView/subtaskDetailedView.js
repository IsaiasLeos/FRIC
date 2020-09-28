import * as React from 'react'
import HelpImage from '../assets/help.png'
import GeneralView from '../generalView/generalView';


class subtaskDetailedView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />
                <div>
                    <h2>Subtask Detailed View</h2>
                    <input type="image" src={HelpImage} class="sort-button" />
                    <form action="" class="form">
                        <label for="subtaskTitle">
                            Title:
                            <input type="text" name="Title" id="subtask-title" />
                        </label><br />
                        <label for="subtaskDescription">
                            Description:
                            <input type="text" name="Description" id="description" />
                        </label><br />
                        <label for="subtaskProgress">
                            Progress:
                            <select name="progress" id="progress-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="notStarted">Not started</option>
                                <option value="assigned">Assigned</option>
                                <option value="transfered">Transfered</option>
                                <option value="inProgress">In progress</option>
                                <option value="complete">Complete</option>
                                <option value="notApplicable">Not applicable</option>
                            </select>
                        </label><br />
                        <label for="subtaskDuedate">
                            Due Date:
                            <input type="date" id="due-date" name="dueDate" />
                        </label><br />
                        <label for="subtaskAnalysts">
                            Analyst(s):
                            <select name="analyst" id="analyst-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="analyst1">Analyst 1</option>
                                <option value="analyst2">Analyst 2</option>
                                <option value="analyst3">Analyst 3</option>
                                <option value="analyst4">Analyst 4</option>
                            </select>
                        </label><br />
                        <label for="subtaskCollaborators">
                            Collaborator(s):
                            <select name="collaborator" id="collaborator-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="collaborator1">Collaborator 1</option>
                                <option value="collaborator2">Collaborator 2</option>
                                <option value="collaborator3">Collaborator 3</option>
                                <option value="collaborator4">Collaborator 4</option>
                            </select>
                        </label><br />
                        <label for="tasks">
                            Task(s):
                            <select name="tasks" id="task-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="task1">Task 1</option>
                                <option value="task2">Task 2</option>
                                <option value="task3">Task 3</option>
                                <option value="task4">Task 4</option>
                                <option value="task5">Task 5</option>
                                <option value="task6">Task 6</option>
                            </select>
                        </label><br />
                        <label for="subtasks">
                            Subtask(s):
                            <select name="subtasks" id="subtask-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="subtask1">Subtask 1</option>
                                <option value="subtask2">Subtask 2</option>
                                <option value="subtask3">Subtask 3</option>
                                <option value="subtask4">Subtask 4</option>
                                <option value="subtask5">Subtask 5</option>
                                <option value="subtask5">Subtask 6</option>
                            </select>
                        </label><br />
                        <label for="attachments">
                            Attachments:
                            <select name="attachments" id="attachment-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="subtaskAttachment1">Attachment 1</option>
                                <option value="subtaskAttachment2">Attachment 2</option>
                                <option value="subtaskAttachment3">Attachment 3</option>
                                <option value="subtaskAttachment4">Attachment 4</option>
                            </select>
                        </label><br />
                    </form>
                    
                </div>
            </div>
        );
    }
}


export default subtaskDetailedView;
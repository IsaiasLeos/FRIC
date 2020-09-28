import * as React from 'react'
import HelpImage from '../assets/help.png'
import GeneralView from '../generalView/generalView';
class taskDetailedView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />
                
                <div>
                    <h2>Task Detailed View</h2>
                    <form action="" class="form">
                        <label for="taskTitle">
                            Title:
                            <input type="text" name="Title" id="task-title" />
                        </label><br />
                        <label for="taskDescription">
                            Description:
                            <input type="text" name="Description" id="description" />
                        </label><br/>
                        <label for="taskSystem">
                            System:
                            <select name="System" id="system-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="System1">System 1</option>
                                <option value="System2">System 2</option>
                                <option value="System3">System 3</option>
                                <option value="System4">System 4</option>
                            </select>
                        </label><br/>
                        <label for="taskPriority">
                            Priority:
                            <select name="priority" id="priority-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">Hight</option>
                            </select>
                        </label><br/>
                        <label for="taskProgress">
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
                        </label><br/>
                        <label for="taskDueDate">
                            Due Date:
                            <input type="date" id="due-date" name="dueDate" />
                        </label><br/>
                        <label for="taskAnalysts">
                            Analyst(s):
                            <select name="analyst" id="analyst-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="analyst1">Analyst 1</option>
                                <option value="analyst2">Analyst 2</option>
                                <option value="analyst3">Analyst 3</option>
                                <option value="analyst4">Analyst 4</option>
                            </select>
                        </label><br/>
                        <label for="taskCollaborators">
                            Collaborator(s):
                            <select name="collaborator" id="collaborator-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="collaborator1">Collaborator 1</option>
                                <option value="collaborator2">Collaborator 2</option>
                                <option value="collaborator3">Collaborator 3</option>
                                <option value="collaborator4">Collaborator 4</option>
                            </select>
                        </label><br/>
                        <label for="relatedTask">
                            Related Task:
                            <select name="relatedTasks" id="relatedtask-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="relatedTask1">Task 1</option>
                                <option value="relatedTask2">Task 2</option>
                                <option value="relatedTask3">Task 3</option>
                                <option value="relatedTask4">Task 4</option>
                            </select>
                        </label><br/>
                        <label for="attachments">
                            Attachments:
                            <select name="attachments" id="attatchment-dropdown">
                                <option value="default" selected="selected"></option>
                                <option value="Attachment1">Attachment 1</option>
                                <option value="Attachment2">Attachment 2</option>
                                <option value="Attachment3">Attachment 3</option>
                                <option value="Attachment4">Attachment 4</option>
                            </select>
                        </label><br/> 
                    </form>
                </div>

            </div>

        );
    }
}

export default taskDetailedView;
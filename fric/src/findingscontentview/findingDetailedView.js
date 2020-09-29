import * as React from 'react'
import HelpImage from '../assets/help.png'
import FileImage from '../assets/fileIcon.png'
import GeneralView from '../generalView/generalView';

class findingDetailedView extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <form action="" class="form">
                        <label for="ID">
                            ID:
                            <br></br><input type="text" name="ID" id="ID" />
                        </label><br />
                        <label for="Host Name">
                            Host Name:
                            <br></br><input type="text" name="hostName" id="hostName" />
                        </label><br/>
                        <label for="IP-Port">
                            IP Port:
                            <br></br><input type="text" name="ipPort" id="ipPort" />
                        </label><br/>
                        <label for="Description">
                            Description:
                            <br></br><input type="text" name="description" id="description" />
                        </label><br/>
                        <label for="LongDescription">
                            Long Description:
                            <br></br><textarea name="LongDescription" id="LongDescription" cols="45" rows="10"></textarea>
                        </label><br/>
                        
                        <label for="Status">
                            Status:
                            <br></br><select name="status" id="status">
                                <option value="default" selected="selected"></option>
                                <option value="analyst1">Open</option>
                                <option value="analyst2">Closed</option>
                            </select>
                        </label><br/>
                        <label for="Type">
                            Type:
                            <br></br><select name="type" id="type">
                                <option value="default" selected="selected"></option>
                                <option value="collaborator1">Manufacturer Default Creds</option>
                                <option value="collaborator2">Lack of Authenticatio</option>
                                <option value="collaborator3">Plain Text Protocol</option>
                                <option value="collaborator4">Plain Text Web Login</option>
                                <option value="collaborator1">Encryption</option>
                                <option value="collaborator2">Authentication Bypass</option>
                                <option value="collaborator3">Port Security</option>
                                <option value="collaborator4">Access Control</option>
                                <option value="collaborator4">Least Privilege</option>
                                <option value="collaborator4">Privilege Escalation</option>
                                <option value="collaborator4">Missing Patches</option>
                                <option value="collaborator4">Physical Security</option>
                                <option value="collaborator4">Information Disclosure</option>
                                
                            </select>
                        </label><br/>
                        <label for="Classification">
                            Classification:
                            <br></br><select name="classification" id="classification">
                                <option value="default" selected="selected"></option>
                                <option value="analyst1">Vulnerability</option>
                                <option value="analyst2">Information</option>
                            </select>
                        </label><br/>
                        <label for="fileName">
                            Image:
                            <br></br><input type="text" name="filename" id="filename" />
                        </label><br/>
                        <label for="system">
                            System:
                            <br></br><select name="system" id="system">
                                <option value="default" selected="selected"></option>
                                <option value="relatedTask1">System A</option>
                                <option value="relatedTask2">System B</option>
                                <option value="relatedTask3">System C</option>
                            </select>
                        </label><br/>
                        <label for="Task">
                            Task(s):
                            <br></br><select name="tasksUsed" id="tasksUsed">
                                <option value="default" selected="selected"></option>
                                <option value="relatedTask1">Task A</option>
                                <option value="relatedTask2">Task B</option>
                                <option value="relatedTask3">Task C</option>
                            </select>
                        </label><br/>
                        <label for="Subtask">
                            Subtask(s):
                            <br></br><select name="subtasksUsed" id="subtasksUsed">
                                <option value="default" selected="selected"></option>
                                <option value="relatedTask1">Subtask A</option>
                                <option value="relatedTask2">Subtask B</option>
                                <option value="relatedTask3">Subtask C</option>
                            </select>
                        </label><br/>
                        <label for="relatedFindings">
                            Related Finding(s):
                            <br></br><select name="relatedFindings" id="relatedFindings">
                                <option value="default" selected="selected"></option>
                                <option value="relatedTask1">Finding 1</option>
                                <option value="relatedTask2">Finding 2</option>
                                <option value="relatedTask3">Finding 3</option>
                            </select>
                        </label><br/>
                        <label for="attachments">
                            Attachments:
                            <br></br><select name="attachments" id="attatchment-dropdown">
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

export default findingDetailedView;
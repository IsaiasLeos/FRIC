import * as React from 'react'
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
class eventTree extends React.Component {
    render() {
        return (
            <TreeView>  
                <TreeItem nodeId="1" label="Event">
                    <TreeItem nodeId="2" label="System 1">
                        <TreeItem nodeId="3" label="Task 1">
                            <TreeItem nodeId="4" label="Subtask 1">
                                <TreeItem nodeId="5" label="Finding 1"/>
                                <TreeItem nodeId="6" label="Finding 2"/>
                            </TreeItem>
                            <TreeItem nodeId="7" label="Subtask 2"/>
                        </TreeItem>
                        <TreeItem nodeId="8" label="Task 2">
                            <TreeItem nodeId="9" label="Finding 3"/>
                        </TreeItem>
                        <TreeItem nodeId="10" label="Finding 4"/>
                    </TreeItem>
                    <TreeItem nodeId="11" label="System 2"></TreeItem>
                </TreeItem>
            </TreeView>
        );
    }
}


export default eventTree;
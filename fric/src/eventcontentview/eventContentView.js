import * as React from 'react'


class eventContentView extends React.Component {
    render() {
        return (
            <body>
                <input type="image" src="../assets/add.png" />
                <button type="button">Delete</button>
                <button type="button">Save</button>
                <button type="button">Cancel</button>
                <table style="width:100%">
                    <tr>
                        <th></th>
                        <th>Event Name <input type="image" src="../assets/updownarrow.png" /></th>
                        <th>No. of Systems <input type="image" src="../assets/updownarrow.png" /></th>
                        <th>No. of Findings <input type="image" src="../assets/updownarrow.png" /></th>
                        <th>Progress <input type="image" src="../assets/updownarrow.png" /></th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="cb1" value="event" /> <a href="eventDetailedView.html">Select</a></td>
                        <td>Event 1</td>
                        <td>14</td>
                        <td>30</td>
                        <td>76%</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="cb1" value="event" /> <a href="eventDetailedView.html">Select</a></td>
                        <td>Event 2</td>
                        <td>7</td>
                        <td>18</td>
                        <td>30%</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="cb1" value="event" /> <a href="eventDetailedView.html">Select</a></td>
                        <td>Event 3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                </table>
            </body>
        );
    }
}


export default eventContentView;
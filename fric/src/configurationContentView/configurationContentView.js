import * as React from 'react'
import Table from 'react-bootstrap/Table'
import GeneralView from '../generalView/generalView';

class configurationContentView extends React.Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           students: [
              { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
              { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' }   
           ]
        }
     }
     renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, name, age, email } = student 
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }
    render() {
        return (
            <div>
                <GeneralView/>
                <h3>Table 1</h3>
                <table id='students'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>


            </div>
        );
        
    }
}

export default configurationContentView;
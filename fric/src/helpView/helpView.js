import * as React from 'react'
import Table from 'react-bootstrap/Table'
import GeneralView from '../generalView/generalView';
import 'react-bootstrap'
import '../assets/css/bootstrap.css'
class helpView extends React.Component {
    
    render() {
        return (
            <div>
                <GeneralView/>
                <h2>Welcome to FRIC help page </h2>
                <p>
                    1.0 Download master branch zipped sourcecode <br/>
                    1.1 Clone the master branch from IsaiasLeo/FRIC repository <br/>
                    2.0 Install node.js for all libarary dependencies <br/>
                    3.0 From terminal run : install npm  <br/>
                    3.1 From terminal run : npm start   <br/>
                </p>
                <br/><br/>
            </div>
        );
    }
}

export default helpView;
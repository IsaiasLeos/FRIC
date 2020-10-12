import * as React from 'react'
import 'react-bootstrap'
import GeneralView from '../generalView/generalView';
import '../assets/css/bootstrap.css'
import { Link } from 'react-router-dom'
class setupContentView extends React.Component {
    constructor() {
        super();
        this.state = { user: {} };
        this.onSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        var self = this;
        
        // On submit send a POST request to the server with the data
        fetch('/users', { 
            method: 'POST',
            data: {
              q1: self.refs.q1,
              q2: self.refs.q2,
              q3: self.refs.q3
            }
          })
          .then(function(response) {
            return response.json()
          })
          .then(function(body) {
            console.log(body);
          });
          
          
      }
    
    render() {
        
        return (
            <div>
                <GeneralView />

                <div class="SetUpView">
                    <h1 style={{ textAlign: "center" }}>Finding and Reporting Information Console (FRIC)</h1>
                </div>

                    <form onSubmit={this.onSubmit} style={{textAlign:"center"}}>
                    
                        <br/><br/>

                        <h6>Please enter your intials</h6>
                        <input type="text" placeholder="AC" ref="q2"></input>

                        <br/><br/>

                        <h6>Please select an Option: </h6>
                        <div class="btn-group">
                          <select class="broswer-default custom-select mr-3">
                            <option> First time sync with lead analyst </option>
                            <option> Create a new event(any exsisting event will be archived) </option>
                          </select>
                        </div>
                        
                        <br/><br/>

                        <h6>Enter the Lead IP</h6>
                        <input type="text" placeholder="if first time sync" ref="q3"></input>

                        <br/><br/>

                        <h6>Event name</h6>
                        <input type="text" placeholder="if new event" ref="q1"></input>

                        <br/><br/>
                        
                          <Link to="/Event">
                             <input type="submit"/>
                          </Link>
                        
                    </form>
                
            </div>
        );
    }
}


export default setupContentView;
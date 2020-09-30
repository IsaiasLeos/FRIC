import * as React from 'react'
import 'react-bootstrap'
import GeneralView from '../generalView/generalView';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

import '../assets/css/bootstrap.css'
import Tree from '../eventTree/eventTree';
class setupContentView extends React.Component {
    constructor() {
        super();
        this.state = { user: {} };
        this.onSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        var self = this;
        // On submit of the form, send a POST request with the data to the server.
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
          }).then(function(body) {
            console.log(body);
          });
      }
    
    render() {
        const questions = [
            {label: 'Create a new event(any exsisting event will be archived)', value:1},
            {label: 'First time sync with lead analyst', value:2}
        ];
        return (
            <div>
                <GeneralView />

                <div class="SetUpView">
                    <h1 style={{ textAlign: "center" }}>Finding and Report Information Console (FRIC)</h1>
                </div>

                    <form onSubmit={this.onSubmit} style={{textAlign:"center"}}>
                    
                        <br/><br/>

                        <h6>There is no exsisting event in your local system</h6>
                        <input type="text" placeholder="q1" ref="q1"></input>

                        <br/><br/>

                        <h6>Please enter your intials</h6>
                        <input type="text" placeholder="q2" ref="q2"></input>

                        <br/><br/>

                        <label for="quest">
	                        Please select an option:<br/>
                            <ReactMultiSelectCheckboxes options={questions} />
                        </label>
                        
                        <br/><br/>

                        <h6>Enter the Lead IP</h6>
                        <input type="text" placeholder="if first time sync" ref="q3"></input>

                        <br/><br/>
                        
                        <input type="submit" />
                    </form>

                    <div class="right-tree">
                    <Tree />
                  </div> 
                
            </div>
        );
    }
}


export default setupContentView;
import * as React from 'react'
import 'react-bootstrap'
import GeneralView from '../generalView/generalView';
import '../assets/css/bootstrap.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
class setupContentView extends React.Component {
    constructor(){
      super();
      this.state = {
        initials: "",
        event_name: "",
      };
    }
    onSubmit = (e) => {
      e.preventDefault();
      const{initials, event_name} = this.state;
      fetch('/event', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({initials, event_name}),
      }).then(response => response.json())
      .then(data => {console.log("Success", data);})
      .then(error => {console.error('Error', error)});
      }
       
    
    render() {
        const{initials, event_name} = this.state;
        return (
            <div>
                <GeneralView />
                <br/>
                



                <h1 style={{ textAlign: "center" }}> Finding and Reporting Information Console (FRIC) </h1>

                    <form onSubmit={this.onSubmit} style={{textAlign:"center"}}>
                    
                        <br/><br/>
                        <h6>"There is no existing event in your system"</h6>
                        <input type="text" name="event_name" id="q1" placeholder="Enter event name" ></input>
                        <br/><br/>
                        
                        <h6>Please enter your intials</h6>
                        <input type="text" name="initials" id="q2" placeholder="Enter initials" ></input>
                        <br/><br/>
                        
                        <Link to="\events">
                          <Button type="submit" classname="btn" variant="outline-dark"> Submit </Button>
                        </Link>                   

                    </form>

                
            </div>
        );
    }
}


export default setupContentView;
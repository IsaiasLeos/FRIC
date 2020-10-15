import * as React from 'react'
import 'react-bootstrap'
import GeneralView from '../generalView/generalView'
import '../assets/css/bootstrap.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
//import '../eventcontentview/eventcontentview'
class setupContentView extends React.Component{
   
    //constructor() {
     // super();
     // this.state = [{name: '', desc: ' ', type: '', vers: '', assess_date: '', org_name: '', event_class: '', declass_date: '', customer_name: ''}]
    //}

  //checkEvent = (e) => {
    //fetch('/eventsOverview').then(
    //response => response.json()).then(data => this.setState(data))
    //console.log(this.state.name) 

    //if(this.state.length == 0){
      //this.handle = true
      
    //}
    //else{
      //this.handle = false
      
    //}
  //}
  

  //submitEvent = (e) => {
    //fetch('/addevent', {
      //method: 'POST',
      //headers: {
        //  'Content-Type': 'application/json',
      //},
      //body: JSON.stringify({name, desc, type, vers, assess_date, org_name, event_class, declass_date, customer_name }),
    //})
  //}
    //const { name, desc, type, vers, assess_date, org_name, event_class, declass_date, customer_name } = this.state;
    // <form handle={this.handle} style={{textAlign:"center"}}>
    //               <h4> No events: Please Enter </h4>
    //           </form>
    render(){
        
        return (
            <div>
            
              <GeneralView /><br/>
              <h1 style={{ textAlign: "center" }}> Finding and Reporting Information Console (FRIC) </h1>

           
              <form  style={{textAlign:"center"}} >
               
                <br/><br/><h6>"There is no existing event in your system"</h6>
                <input type="text" name="name" id="q2" placeholder="Enter events" ></input>
                
              
                <br/><br/><h6>Please enter your intials</h6>
                <input type="text" name="initials" id="q2" placeholder="Enter initials" ></input>
                <br/><br/>

                <Link to="/Event">           
                  <Button type="submit" classname="btn" variant="outline-dark" > Submit </Button>
                </Link>
                
              
              </form> 
 
            </div> 
          );
        }
  }
  
  
  export default setupContentView;
import React from 'react';
import { render } from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {

     resolutions () {
	    return Resolutions.find().fetch();
           }
	  addResolution(event) {
    event.preventDefault();
   
    var text = this.refs.resolution.value.trim();
     console.log(text);
    

    Resolutions.insert({
      text: text,
      complete: false,
      createdAt: new Date()
    });

    // reset string
    this.refs.resolution.value = "";
  }

  render() {
  	let res = this.resolutions();
  	if(res.length < 1){
  		return ( <div>Loading...</div> )
  	}
    return (
    	<div>
      <h1>My Resolutions</h1>

      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
          <input 
              type="text" 
               ref="resolution"
               placeholder="Enter a resolution"
               />
      </form>

       <div>
      	{res[1].text}
       </div>

     </div>
    );
  }
}


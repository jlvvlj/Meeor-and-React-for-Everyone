import React from 'react';
import { render } from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './ResolutionsForm.jsx';
import SingleResolution from './SingleResolution.jsx';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {

     resolutions () {
	    return Resolutions.find().fetch();
           }
	  

  render() {
  	let res = this.resolutions();
  	if(res.length < 1){
  		return ( <div>Loading...</div> )
  	}
    return (
    	<div>
      
      <h1>My Resolutions</h1>

      <ResolutionsForm />
      <SingleResolution resolution={res[0]} />
      	

     
     </div>
    );
  }
}


import React from 'react';
import { render } from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SingleResolution from './SingleResolution.jsx';
import ResolutionsForm from './ResolutionsForm.jsx';

Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionsWrapper extends TrackerReact(React.Component) {

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

      <ul className="resolutions">
      {this.resolutions().map( (resolution)=>{
        return  <SingleResolution key={resolution._id} resolution={resolution} />
        } ) }

      </ul>
      	
     </div>
    );
  }
}


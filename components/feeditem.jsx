import React from "react";

const FeadItem = React.createClass ({
  render: function() {
    return (
	    <li className="list-group-item">
	    	<a href={this.props.link}>
          <h2 className="commentAuthor">
            {this.props.title}
          </h2>
        	
        	<img className="image" src={this.props.image} />
          <div> {this.props.summary} </div>
        </a> 
	    </li>
    );
  }
});

export default FeadItem;
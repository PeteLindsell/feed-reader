import React from "react";

const FeadItem = React.createClass ({
  render: function() {
    return (
	    <li>
	    	<a href={this.props.link}>
          <h2 className="commentAuthor">
            {this.props.title}
          </h2>
        
          <span> {this.props.summary} </span>
        </a> 
	    </li>
    );
  }
});

export default FeadItem;
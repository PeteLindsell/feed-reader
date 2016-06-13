import React from "react";

const FeedSelect = React.createClass ({
  getInitialState: function() {
    return {value: 'lobal'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  },
  render: function() {
    return (
	    <select className="form-control" value={this.state.value} onChange={this.handleChange}>
		    <option value="global">Global and UK News Feeds</option>
		    <option value="video">Video & Audio News Feeds</option>
		    <option value="other">Other News Feeds</option>
		  </select>
    );
  }
});

export default FeedSelect;
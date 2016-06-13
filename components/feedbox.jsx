import React from "react";

import FeedItems from "./feeditems";

var data = [
  {id: 1, title: "title 1", text: "this is discription one", link:"www.google.com"},
  {id: 2, title: "title 2", text: "this is discription one", link:"www.google.com"},
  {id: 3, title: "title 3", text: "this is discription one", link:"www.google.com"},
];

const FeadBox = React.createClass ({
	getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    var that = this;

    var url = "http://feeds.bbci.co.uk/news/rss.xml";

    feednami.load(url,function(result){
        if(result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            console.log("count = " + entries.length);
            for(var i = 0; i < entries.length; i++){
                var entry = entries[i];
                console.dir(entry);
            }

            that.setState({data: result.feed.entries});

        }
    });
    that = this;
  },
  render: function() {
    return (
    	<div className="container">
		    <select className="form-control" value={"global"}>
			    <option value="global">Global and UK News Feeds</option>
			    <option value="video">Video & Audio News Feeds</option>
			    <option value="other">Other News Feeds</option>
			  </select>

	      <FeedItems data={this.state.data}/>
			</div>
    );
  }
});

export default FeadBox;
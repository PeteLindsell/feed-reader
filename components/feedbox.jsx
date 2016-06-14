import React from "react";

import FeedItems from "./feeditems";
import FeedSelect from "./feedselect";

const FeadBox = React.createClass ({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.fetchData()
  },
  componentWillReceiveProps: function() {
    this.fetchData();
  },
  fetchData: function() {
    // TODO: Add loader to give user feedback of selection.
    var url = "http://feeds.bbci.co.uk/" + this.props.feed + "/rss.xml";
    console.log("1" + url)
    var that = this;

    // Use feednami as google feed api is deprecated.
    feednami.load(url,function(result){
      if(result.error) {
        console.log(result.error);
      } else {
        var entries = result.feed.entries;
        for(var i = 0; i < entries.length; i++){
            var entry = entries[i];
        }
        that.setState({data: result.feed.entries});
      }
    });
    that = this;
  },
  render: function() {
    return (
      <div className="container">
        <FeedItems data={this.state.data}/>
        }
      </div>
    );
  }
});

export default FeadBox;
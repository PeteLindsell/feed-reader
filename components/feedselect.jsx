import React from "react";

const FeedSelect = React.createClass ({
  getDefaultProps: function () {
    return {
      fieldMap: {
        "global": [
          { value: "news/world/africa", label: "Africa" },
          { value: "news/world/asia", label: "Asia" }
        ],
        "video": [
          { value: "news/video_and_audio/news_front_page", label: "Top stories" },
          { value: "news/video_and_audio/world", label: "World" }
        ],
        "other": [
          { value: "news/world/africa", label: "Africa" },
          { value: "news/world/asia", label: "Asia" }
        ]
      }
    }
  },
  getInitialState: function() {
     return {
         firstValue: '',
         secondValue: '',
         feed: 'news/world/asia'
       }
  },
  getOptions: function (key) {    
    if (!this.props.fieldMap[key]) {
      return null;
    }
    
    return this.props.fieldMap[key].map(function (el, i) {
      return <option key={i} value={el.value}>{el.label}</option>
    });
  },
  handleFirstLevelChange: function (event) {
    this.setState({
      firstValue: event.target.value,
      secondValue: ''
    });
  },
  handleSecondLevelChange: function (event) {
    console.log(event.target.value);

    this.setState({feed: event.target.value});
    this.setState({
      secondValue: event.target.value,
    });
  },
  getSecondLevelField: function () {
    if (!this.state.firstValue) {
      return null;
    }
    
    return (
      <select className="form-control" onChange={this.handleSecondLevelChange} value={this.state.secondValue}>
        <option value="" selected disabled>Please select</option>     
        {this.getOptions(this.state.firstValue)}
      </select>
    )
  },
  render: function() {
    return (
    <div>
      <select className="form-control" onChange={this.handleFirstLevelChange} value={this.state.firstValue}>
        <option value="global">Global and UK News Feeds</option>
         <option value="video">Video & Audio News Feeds</option>
         <option value="other">Other News Feeds</option>
       </select>
      {this.getSecondLevelField()}
    </div>
    );
  }
});

export default FeedSelect;
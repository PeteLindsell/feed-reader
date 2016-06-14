import React from "react";

const FeedSelect = React.createClass ({
  getDefaultProps: function () {
    // TODO: These should not be hard coded but could not find a list as you would expect from an api.
    return {
      fieldMap: {
        "popular": [
          { value: "news", label: "Top Stories" },
          { value: "news/world", label: "World" },
          { value: "news/uk", label: "World" },
          { value: "news/business", label: "Business" },
          { value: "news/politics", label: "Politics" },
          { value: "news/health", label: "Health" },
          { value: "news/education", label: "Education & Family" },
          { value: "news/science_and_environment", label: "Science & Environment" },
          { value: "news/technology", label: "Technology" },
          { value: "news/entertainment_and_arts", label: "Entertainment & Arts" }
        ],
        "global": [
          { value: "news/world/africa", label: "Africa" },
          { value: "news/world/asia", label: "Asia" },
          { value: "news/world/europe", label: "Europe" },
          { value: "news/world/latin_america", label: "Latin America" },
          { value: "news/world/middle_east", label: "Middle East" },
          { value: "news/world/us_and_canada", label: "US & Canada" },
          { value: "news/world/england", label: "England" },
          { value: "news/world/northern_ireland", label: "Northern Ireland" },
          { value: "news/world/scotland", label: "Scotland" },
          { value: "news/world/wales", label: "Wales" }
        ],
        "video": [
          { value: "news/video_and_audio/news_front_page", label: "Top stories" },
          { value: "news/video_and_audio/world", label: "World" },
          { value: "news/video_and_audio/uk", label: "UK" },
          { value: "news/video_and_audio/business", label: "Business" },
          { value: "news/video_and_audio/politics", label: "Politics" },
          { value: "news/video_and_audio/health", label: "Health" },
          { value: "news/video_and_audio/science_and_environment", label: "Science & Environment" },
          { value: "news/video_and_audio/technology", label: "Technology" }
        ],
        "other": [
          { value: "news/system/latest_published_content/rss.xml", label: "Latest published stories" },
          { value: "news/magazine", label: "Magazine" },
          { value: "news/also_in_the_news", label: "Also in the news" },
          { value: "rss/newsonline_uk_edition/in_pictures", label: "In Pictures" },
          { value: "news/special_reports", label: "Special Reports" },
          { value: "news/theeditors", label: "Have your say" },
          { value: "news/editors_blog", label: "Editors Blog" }
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
    <div className="feedSelect">
      <select className="form-control" onChange={this.handleFirstLevelChange} value={this.state.firstValue}>
        <option value="" selected disabled>Please select</option>  
        <option value="popular">Popular BBC News Feeds</option>
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
import React from "react";

import FeedItem from "./feeditem";

var data = [
  {id: 1, title: "title 1", text: "this is discription one", link:"www.google.com"},
  {id: 2, title: "title 2", text: "this is discription one", link:"www.google.com"},
  {id: 3, title: "title 3", text: "this is discription one", link:"www.google.com"},
];

const FeadItems = React.createClass ({

  render: function() {
  	var feedItems = data.map(function(feed) {
    return (
      <FeedItem link={feed.link} title={feed.title} summary={feed.summary} key={feed.id}>
        {feed.text}
      </FeedItem>
    )
  })
	return (
    <ul className="list-group">
      {feedItems}
    </ul>
  );
  }
});

export default FeadItems;
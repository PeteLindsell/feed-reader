import React from "react";

import FeedItem from "./feeditem";

const FeadItems = React.createClass ({

  render: function() {
  	const feedItems = this.props.data.map(function(feed) {
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
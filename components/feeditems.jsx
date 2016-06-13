import React from "react";

import FeedItem from "./feeditem";

const FeadItems = React.createClass ({

  render: function() {
  	const feedItems = this.props.data.map(function(feed) {
    return (
      <FeedItem link={feed.link} image={feed.image.url} title={feed.title} summary={feed.summary} key={feed.pubdate_ms}>
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
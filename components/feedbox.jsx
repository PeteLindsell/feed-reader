import React from "react";

import FeedItems from "./feeditems";

const FeadBox = React.createClass ({

  render() {
    return (
    	<div className="container">
    		<div>This is a feed box</div>
	      <FeedItems />
			</div>
    );
  }
});

export default FeadBox;
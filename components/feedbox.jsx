import React from "react";

import FeedItems from "./feeditems";

var data = [
  {id: 1, title: "title 1", text: "this is discription one", link:"www.google.com"},
  {id: 2, title: "title 2", text: "this is discription one", link:"www.google.com"},
  {id: 3, title: "title 3", text: "this is discription one", link:"www.google.com"},
];

const FeadBox = React.createClass ({

  render() {
    return (
    	<div className="container">
    		<div>This is a feed box</div>
	      <FeedItems data={data}/>
			</div>
    );
  }
});

export default FeadBox;
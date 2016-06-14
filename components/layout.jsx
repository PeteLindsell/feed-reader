import React from "react";

import Header from "./header";
import FeedSelect from "./feedselect";

const Layout = React.createClass ({
  render: function() {
    return (
      <div>
        <Header />
		    <FeedSelect />
      </div>
    );
  }
});

export default Layout;
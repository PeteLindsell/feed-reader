import React from "react";

import Header from "./header";
import FeedBox from "./feedbox";

const Layout = React.createClass ({
  render() {
    return (
      <div>
        <Header />
        <FeedBox />
      </div>
    );
  }
});

export default Layout;
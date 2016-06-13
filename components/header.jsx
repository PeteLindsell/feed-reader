import React from "react";

const Header = React.createClass ({

  render() {
    return (
    	<header className="navbar navbar-inverse navbar-fixed-top">
	      <div className="container">
	        <div className="navbar-header">
	          <a className="navbar-brand" href="#">Latest News</a>
	        </div>
	      </div>
			</header>
    );
  }
});

export default Header;
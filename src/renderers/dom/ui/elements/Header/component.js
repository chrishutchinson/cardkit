// Libraries
const React = require("react");

// Styles
require("./style.scss");

// Images
const images = {
  logo: require("../../images/logo.png"),
};

// Header class
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={images.logo.default} />

        <a
          href="https://www.github.com/chrishutchinson/cardkit"
          target="_blank"
          rel="noreferrer"
        >
          About CardKit
        </a>
      </header>
    );
  }
}

Header.propTypes = {};

// Export
module.exports = Header;

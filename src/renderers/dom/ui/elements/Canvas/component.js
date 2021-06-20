// Libraries
const React = require("react");
const PropTypes = require("prop-types");

// Styles
require("./style.scss");

// Card
const Card = require("../../../../shared/Card");

// Canvas class
class Canvas extends React.Component {
  render() {
    return (
      <div
        className={
          "canvas" + (this.props.sidebarOpen ? " canvas--with-sidebar" : "")
        }
      >
        <Card
          configuration={this.props.configuration}
          svgRef={this.props.svgRef}
        />
      </div>
    );
  }
}

Canvas.propTypes = {
  sidebarOpen: PropTypes.bool,
  configuration: PropTypes.object.isRequired,
  svgRef: PropTypes.any.isRequired,
};

// Export
module.exports = Canvas;

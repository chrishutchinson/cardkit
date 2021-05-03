// Libraries
const React = require("react");
const PropTypes = require("prop-types");

// Styles
require("./style.scss");

// Card
const Card = require("../../../../shared/Card");

// Canvas class
class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.handleMount = this.handleMount.bind(this);
  }

  handleMount(svgRef) {
    this.props.onMount(svgRef);
  }

  render() {
    return (
      <div
        className={
          "canvas" + (this.props.sidebarOpen ? " canvas--with-sidebar" : "")
        }
      >
        <Card
          configuration={this.props.configuration}
          onMount={this.handleMount}
        />
      </div>
    );
  }
}

Canvas.propTypes = {
  sidebarOpen: PropTypes.bool,
  configuration: PropTypes.object.isRequired,
  onMount: PropTypes.func,
};

// Export
module.exports = Canvas;

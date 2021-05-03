const React = require("react");
const PropTypes = require("prop-types");

const DraggableBase = require("./base/draggable");

class Path extends DraggableBase {
  render() {
    const { d, fill, transform } = this.props;

    return (
      <path d={d} fill={fill} transform={transform} {...this.draggableProps} />
    );
  }
}

// Prop types
Path.propTypes = {
  d: PropTypes.string.isRequired,
};

Path.defaultProps = {};

module.exports = Path;

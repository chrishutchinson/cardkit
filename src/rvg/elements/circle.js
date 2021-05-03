const React = require("react");
const PropTypes = require("prop-types");

const DraggableBase = require("./base/draggable");

class Circle extends DraggableBase {
  render() {
    const { x, y, fill, radius } = this.props;

    return (
      <circle cx={x} cy={y} fill={fill} r={radius} {...this.draggableProps} />
    );
  }
}

// Prop types
Circle.propTypes = {
  x: PropTypes.any.isRequired,
  y: PropTypes.any.isRequired,
  fill: PropTypes.string.isRequired,
  radius: PropTypes.any.isRequired,
};

Circle.defaultProps = {
  x: 100,
  y: 100,
  fill: "#000",
  radius: 100,
};

module.exports = Circle;

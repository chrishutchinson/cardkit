const React = require("react");
const PropTypes = require("prop-types");

const DraggableBase = require("./base/draggable");

class Rectangle extends DraggableBase {
  render() {
    let { x, y, fill, gradient, height, width } = this.props;

    if (gradient) {
      fill = gradient;
    }

    return (
      <rect
        x={x}
        y={y}
        fill={fill}
        height={height}
        width={width}
        {...this.draggableProps}
      />
    );
  }
}

// Prop types
Rectangle.propTypes = {
  x: PropTypes.any.isRequired,
  y: PropTypes.any.isRequired,
  fill: PropTypes.string.isRequired,
  height: PropTypes.any.isRequired,
  width: PropTypes.any.isRequired,
};

Rectangle.defaultProps = {
  x: 0,
  y: 0,
  fill: "#000",
  height: 100,
  width: 100,
};

module.exports = Rectangle;

const React = require("react");
const PropTypes = require("prop-types");

const DraggableBase = require("./base/draggable");

class Ellipse extends DraggableBase {
  render() {
    const { x, y, fill, radiusX, radiusY } = this.props;

    return (
      <ellipse
        cx={x}
        cy={y}
        fill={fill}
        rx={radiusX}
        ry={radiusY}
        {...this.draggableProps}
      />
    );
  }
}

// Prop types
Ellipse.propTypes = {
  x: PropTypes.any.isRequired,
  y: PropTypes.any.isRequired,
  fill: PropTypes.string.isRequired,
  radiusX: PropTypes.any.isRequired,
  radiusY: PropTypes.any.isRequired,
};

Ellipse.defaultProps = {
  x: 100,
  y: 50,
  fill: "#000",
  radiusX: 100,
  radiusY: 50,
};

module.exports = Ellipse;

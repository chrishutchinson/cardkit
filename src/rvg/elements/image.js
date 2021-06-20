const React = require("react");
const PropTypes = require("prop-types");

const DraggableBase = require("./base/draggable");

class Image extends DraggableBase {
  render() {
    const { x, y, height, width, href, opacity } = this.props;

    return (
      <image
        xlinkHref={href}
        x={x}
        y={y}
        height={height}
        width={width}
        preserveAspectRatio="xMinYMin meet"
        opacity={opacity}
        {...this.draggableProps}
      />
    );
  }
}

// Prop types
Image.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  ratio: PropTypes.string.isRequired,
};

Image.defaultProps = {
  x: 0,
  y: 0,
  ratio: "auto",
};

module.exports = Image;

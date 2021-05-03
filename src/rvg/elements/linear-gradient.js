const React = require("react");
const PropTypes = require("prop-types");

class LinearGradient extends React.Component {
  render() {
    const { name, x1, x2, y1, y2, stops } = this.props;

    return (
      <linearGradient id={name} x1={x1} x2={x2} y1={y1} y2={y2}>
        {stops.map((stop, index) => {
          return (
            <stop
              key={index}
              offset={stop.offset}
              stopColor={stop.color}
              stopOpacity={stop.opacity}
            />
          );
        })}
      </linearGradient>
    );
  }
}

// Prop types
LinearGradient.propTypes = {
  name: PropTypes.string.isRequired,
  x1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  stops: PropTypes.arrayOf(
    PropTypes.shape({
      offset: PropTypes.any.isRequired,
      color: PropTypes.string.isRequired,
      opacity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

module.exports = LinearGradient;

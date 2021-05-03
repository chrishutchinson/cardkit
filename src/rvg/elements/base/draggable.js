const React = require("react");
const PropTypes = require("prop-types");

class DraggableBase extends React.Component {
  constructor(props) {
    super(props);

    this.draggableProps = {};
    if (this.props.draggable) {
      this.draggableProps = {
        "data-draggable": true,
        style: {
          cursor: "move",
        },
      };
    } else {
      this.draggableProps = {
        style: {
          pointerEvents: "none",
        },
      };
    }
  }
}

DraggableBase.propTypes = {
  draggable: PropTypes.bool.isRequired,
};

module.exports = DraggableBase;

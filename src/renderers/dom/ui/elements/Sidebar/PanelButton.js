// Libraries
const React = require("react");
const PropTypes = require("prop-types");

// PanelButton class
class PanelButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    const { title, active } = this.props;

    return (
      <li>
        <button
          onClick={this.handleClick}
          className={"button" + (active ? " button--active" : "")}
        >
          {title}
        </button>
      </li>
    );
  }
}

PanelButton.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

// Export
module.exports = PanelButton;

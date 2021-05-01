// Libraries
const React = require("react");
const PropTypes = require("prop-types");

// CardLayout class
class CardLayout extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    const { name, layout, ratioHeight } = this.props;
    return (
      <div
        role="button"
        onClick={this.handleClick}
        className={"layout" + (layout === name ? " layout--selected" : "")}
        style={{ height: ratioHeight + "px", width: "270px" }}
      >
        <div>{this.props.children}</div>
      </div>
    );
  }
}

CardLayout.propTypes = {
  onClick: PropTypes.func.isRequired,
  layout: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ratioHeight: PropTypes.number.isRequired,
  children: PropTypes.array,
};

// Export
module.exports = CardLayout;

// Libraries
const React = require("react");
const PropTypes = require("prop-types");

// CardTemplate class
class CardTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    const { name, template, children } = this.props;

    return (
      <li
        onClick={this.handleClick}
        className={
          "template-image" +
          (name === template ? " template-image--selected" : "")
        }
      >
        {children}
      </li>
    );
  }
}

CardTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Export
module.exports = CardTemplate;

// Libraries
const React = require('react');

// CardTemplate class
class CardTemplate extends React.Component {

  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onClick(this.props.name);
  }

  render () {
    const { name, template, children } = this.props;

    return (<li onClick={this.handleClick}
      className={'template-image' + (name === template ? ' template-image--selected' : '')}>
      {children}
    </li>);
  }

}

CardTemplate.propTypes = {
  name: React.PropTypes.string.isRequired,
  template: React.PropTypes.string.isRequired,
  children: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
}

// Export
module.exports = CardTemplate;

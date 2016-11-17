// Libraries
const React = require('react');

// PanelButton class
class PanelButton extends React.Component {

  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onClick(this.props.name);
  }

  render () {
    const { title, active } = this.props;

    return (<li>
      <button onClick={this.handleClick}
        className={'button' + (active ? ' button--active' : '')}>
        {title}
      </button>
    </li>);
  }

}

PanelButton.propTypes = {
  name: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired
}

// Export
module.exports = PanelButton;

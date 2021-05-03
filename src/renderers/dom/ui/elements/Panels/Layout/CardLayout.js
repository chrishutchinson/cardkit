// Libraries
const React = require('react');

// CardLayout class
class CardLayout extends React.Component {

  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onClick(this.props.name);
  }

  render () {
    const { name, layout, ratioHeight } = this.props;
    return (<div role="button"
      onClick={this.handleClick}
      className={'layout' + (layout === name ? ' layout--selected' : '')}
      style={{height: ratioHeight + 'px', width: '270px'}}>
      <div>
        {this.props.children}
      </div>
    </div>);
  }

}

CardLayout.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  layout: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  ratioHeight: React.PropTypes.number.isRequired,
  children: React.PropTypes.array
}

// Export
module.exports = CardLayout;

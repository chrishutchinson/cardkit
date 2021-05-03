// Libraries
const React = require('react');
const CardLayout = require('./CardLayout');

// Styles
require('./style.scss');

// LayoutPanel class
class LayoutPanel extends React.Component {

  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (name) {
    this.props.onLayoutChange(name);
  }

  render () {
    if (!this.props.layouts) return null;

    return (
      <div className={'panel panel--layout' + (this.props.active ? ' panel--show' : '')}>
        <h3>Layout</h3>

        {Object.keys(this.props.layouts).map((name, index) => {
          const { width, height } = this.props.layouts[name].card;

          const ratioHeight = height / width * 270;

          return (<CardLayout key={index}
            onClick={this.handleClick}
            layout={this.props.layout}
            name={name}
            ratioHeight={ratioHeight}>
            <h4>{name}</h4>
            {width} &times; {height}
          </CardLayout>)
        })}

      </div>
    );
  }

}

LayoutPanel.propTypes = {
  onLayoutChange: React.PropTypes.func.isRequired,
  layouts: React.PropTypes.object.isRequired,
  layout: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool
}

// Export
module.exports = LayoutPanel;

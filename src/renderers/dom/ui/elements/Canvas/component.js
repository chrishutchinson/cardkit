// Libraries
const React = require('react');

// Styles
require('./style.scss');

// Card
const Card = require('../../../../shared/Card');

// Canvas class
class Canvas extends React.Component {

  render () {
    return (
      <div className={'canvas' + (this.props.sidebarOpen ? ' canvas--with-sidebar' : '')}>
        <Card ref="card" configuration={this.props.configuration} />
      </div>
    );
  }

}

Canvas.propTypes = {
  sidebarOpen: React.PropTypes.bool,
  configuration: React.PropTypes.object.isRequired
}

// Export
module.exports = Canvas;

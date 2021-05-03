// Libraries
const React = require('react');

// Styles
require('./base.scss');

// Elements
const {
  Header,
  Sidebar,
  Canvas
} = require('./elements');

// UI class
class UI extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      configuration: this.props.configuration,
      template: ((this.props.templates) ? Object.keys(this.props.templates)[0] : false),
      theme: ((this.props.themes) ? Object.keys(this.props.themes)[0] : false),
      layout: ((this.props.layouts) ? Object.keys(this.props.layouts)[0] : false),
      sidebarOpen: true
    };

    this.updateConfiguration = this.updateConfiguration.bind(this);
    this.updateTemplate = this.updateTemplate.bind(this);
    this.updateTheme = this.updateTheme.bind(this);
    this.updateLayout = this.updateLayout.bind(this);
    this.downloadCard = this.downloadCard.bind(this);
    this.handleSidebarChange = this.handleSidebarChange.bind(this);
  }

  updateConfiguration (configuration) {
    this.setState({
      configuration: configuration
    });
  }

  updateTemplate (template) {
    const configuration = this.props.cardKit.computeConfiguration({
      template: template,
      theme: this.state.theme,
      layout: this.state.layout
    });

    this.setState({
      configuration: configuration,
      template: template
    });
  }

  updateLayout (layout) {
    const configuration = this.props.cardKit.computeConfiguration({
      template: this.state.template,
      theme: this.state.theme,
      layout: layout
    });

    this.setState({
      configuration: configuration,
      layout: layout
    });
  }

  updateTheme (theme) {
    const configuration = this.props.cardKit.computeConfiguration({
      template: this.state.template,
      theme: theme,
      layout: this.state.layout
    });

    this.setState({
      configuration: configuration,
      theme: theme
    });
  }

  downloadCard () {
    // This is dumb, but allows us to get at the SVG element on the DOM, which we can then send off for download
    this.props.cardKit.download(2, this.refs.canvas.refs.card.refs.svg);
  }

  handleSidebarChange (state) {
    this.setState({
      sidebarOpen: state
    });
  }

  componentWillReceiveProps (nextProps) {
    this.updateConfiguration(nextProps.configuration);
  }

  render () {
    return (
      <div>
        <Header />

        <main className="main">

          <Sidebar configuration={this.state.configuration}

            template={this.state.template}
            templates={this.props.templates}

            theme={this.state.theme}
            themes={this.props.themes}

            layout={this.state.layout}
            layouts={this.props.layouts}

            onConfigurationChange={this.updateConfiguration}
            onTemplateChange={this.updateTemplate}
            onThemeChange={this.updateTheme}
            onLayoutChange={this.updateLayout}

            onRequestDownload={this.downloadCard}
            onSidebarChange={this.handleSidebarChange} />

          <Canvas ref="canvas"
            sidebarOpen={this.state.sidebarOpen}
            configuration={this.state.configuration} />

        </main>

      </div>
    );
  }

}

UI.propTypes = {
  templates: React.PropTypes.object,
  layouts: React.PropTypes.object,
  themes: React.PropTypes.object,
  cardKit: React.PropTypes.object.isRequired,
  configuration: React.PropTypes.object.isRequired
}

// Export
module.exports = UI;

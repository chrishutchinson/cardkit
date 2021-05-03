// Libraries
const React = require("react");
const PropTypes = require("prop-types");

// Styles
require("./base.scss");

// Elements
const { Header, Sidebar, Canvas } = require("./elements");

// UI class
class UI extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
    this.svgRef = null;

    this.state = {
      configuration: this.props.configuration,
      template: this.props.templates
        ? Object.keys(this.props.templates)[0]
        : false,
      theme: this.props.themes ? Object.keys(this.props.themes)[0] : false,
      layout: this.props.layouts ? Object.keys(this.props.layouts)[0] : false,
      sidebarOpen: true,
    };

    this.updateConfiguration = this.updateConfiguration.bind(this);
    this.updateTemplate = this.updateTemplate.bind(this);
    this.updateTheme = this.updateTheme.bind(this);
    this.updateLayout = this.updateLayout.bind(this);
    this.downloadCard = this.downloadCard.bind(this);
    this.handleSidebarChange = this.handleSidebarChange.bind(this);
  }

  updateConfiguration(configuration) {
    this.setState({
      configuration: configuration,
    });
  }

  updateTemplate(template) {
    const configuration = this.props.cardKit.computeConfiguration({
      template: template,
      theme: this.state.theme,
      layout: this.state.layout,
    });

    this.setState({
      configuration: configuration,
      template: template,
    });
  }

  updateLayout(layout) {
    const configuration = this.props.cardKit.computeConfiguration({
      template: this.state.template,
      theme: this.state.theme,
      layout: layout,
    });

    this.setState({
      configuration: configuration,
      layout: layout,
    });
  }

  updateTheme(theme) {
    const configuration = this.props.cardKit.computeConfiguration({
      template: this.state.template,
      theme: theme,
      layout: this.state.layout,
    });

    this.setState({
      configuration: configuration,
      theme: theme,
    });
  }

  downloadCard() {
    if (!this.svgRef) {
      return;
    }

    this.props.cardKit.download(2, this.svgRef);
  }

  handleSidebarChange(state) {
    this.setState({
      sidebarOpen: state,
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.updateConfiguration(nextProps.configuration);
  }

  handleMount(svgRef) {
    this.svgRef = svgRef;
  }

  render() {
    return (
      <div>
        <Header />

        <main className="main">
          <Sidebar
            configuration={this.state.configuration}
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
            onSidebarChange={this.handleSidebarChange}
          />

          <Canvas
            ref={this.canvasRef}
            onMount={this.handleMount}
            sidebarOpen={this.state.sidebarOpen}
            configuration={this.state.configuration}
          />
        </main>
      </div>
    );
  }
}

UI.propTypes = {
  templates: PropTypes.object,
  layouts: PropTypes.object,
  themes: PropTypes.object,
  cardKit: PropTypes.object.isRequired,
  configuration: PropTypes.object.isRequired,
};

// Export
module.exports = UI;

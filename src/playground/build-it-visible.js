class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVis = this.toggleVis.bind(this);
    this.state = {
      visible: false
    }
  }
  toggleVis() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visible Toggle</h1>
        <button onClick={this.toggleVis}>
          {this.state.visible ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visible && (
          <p>Hey there biatch</p>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


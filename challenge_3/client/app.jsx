class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }

  handleClick() {
    alert('hi');
  }

  render() {
    switch(this.state.page) {
      case 0:
        return (
          <button onClick={this.handleClick}>Checkout</button>
        );
        break;
      case 1:
        return
        break;
      case 2:
        return
        break;
      case 3:
        return
        break;
    }

  }
}


ReactDOM.render(<App />, document.getElementById("app"));
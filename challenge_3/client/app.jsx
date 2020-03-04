class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }

  handleClick() {
    this.setState(oldState => {
      if (oldState.page === 4) {
        return { page: 0 };
      } else {
        return { page: oldState.page + 1 }
      }
    });
  }

  render() {
    switch (this.state.page) {
      case 0:
        return (
          <button onClick={this.handleClick.bind(this)}>Checkout</button>
        );
        break;
      case 1:
        return (
          <div>
            <div>Form page 1</div>
            <button onClick={this.handleClick.bind(this)}>Next</button>
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <div>Form page 2</div>
            <button onClick={this.handleClick.bind(this)}>Next</button>
          </div>
        );
        break;
      case 3:
        return (
          <div>
            <div>Form page 3</div>
            <button onClick={this.handleClick.bind(this)}>Next</button>
          </div>
        );
        break;
      case 4:
        return (
          <div>
            <div>Confirmation Page</div>
            <button onClick={this.handleClick.bind(this)}>Purchase</button>
          </div>
        );
        break;
    }

  }
}


ReactDOM.render(<App />, document.getElementById("app"));
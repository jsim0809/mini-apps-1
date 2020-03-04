class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

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

  handleChange(event) {
    this.setState({
      test: event.target.value
    })
  }

  render() {
    switch (this.state.page) {
      case 0:
        return (
          <div>
            <h4>You are purchasing:</h4>
            <img src="https://poodles2doodles.com/wp-content/uploads/2019/03/Olaf-Royal2of7.jpg" style={{ height: 'auto', width: '20%' }} />
            <br />
            <br />
            <button onClick={this.handleClick}>Checkout</button>
          </div>
        );
        break;
      case 1:
        return (
          <div>
            <h4>Please create an account:</h4>

              <label for="name">Name </label>
              <input type="text" name="name" onChange={this.handleChange} />
              <br />
              <br />
              <label for="name">Email </label>
              <input type="email" name="email" onChange={this.handleChange} />
              <br />
              <br />
              <label for="name">Password </label>
              <input type="password" name="password" onChange={this.handleChange} />
              <br />
              <br />
              <button onClick={this.handleClick}>Next</button>
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <h4>Shipping details:</h4>
            <button onClick={this.handleClick}>Next</button>
          </div>
        );
        break;
      case 3:
        return (
          <div>
            <h4>Payment details:</h4>
            <button onClick={this.handleClick}>Next</button>
          </div>
        );
        break;
      case 4:
        return (
          <div>
            <h4>Confirmation page</h4>
            <button onClick={this.handleClick}>Purchase</button>
          </div>
        );
        break;
    }

  }
}


ReactDOM.render(<App />, document.getElementById("app"));
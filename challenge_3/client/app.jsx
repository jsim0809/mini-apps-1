class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      name: '',
      email: '',
      password: '',
      addr1: '',
      addr2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      cc: '',
      expiry: '',
      cvv: '',
      bzip: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleClick() {
    // Send state object to server
    // Clear fields
    this.setState(oldState => {
      if (oldState.page === 4) {
        return { page: 0 };
      } else {
        return { page: oldState.page + 1 }
      }
    });
  }

  handleChange(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
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
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
            <br />
            <br />
            <label for="email">Email </label>
            <input type="email" value={this.state.email} name="email" onChange={this.handleChange} />
            <br />
            <br />
            <label for="password">Password </label>
            <input type="password" value={this.state.password} name="password" onChange={this.handleChange} />
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
            <label for="addr1">Address (line 1) </label>
            <input type="text" value={this.state.addr1} name="addr1" onChange={this.handleChange} />
            <br />
            <br />
            <label for="addr2">Address (line 2) </label>
            <input type="text" value={this.state.addr2} name="addr2" onChange={this.handleChange} />
            <br />
            <br />
            <label for="city">City </label>
            <input type="text" value={this.state.city} name="city" onChange={this.handleChange} />
            <br />
            <br />
            <label for="state">State </label>
            <input type="text" value={this.state.state} name="state" onChange={this.handleChange} />
            <br />
            <br />
            <label for="zip">Zip code </label>
            <input type="text" value={this.state.zip} name="zip" onChange={this.handleChange} />
            <br />
            <br />
            <label for="phone">Phone </label>
            <input type="tel" value={this.state.phone} name="phone" onChange={this.handleChange} />
            <br />
            <br />
            <button onClick={this.handleClick}>Next</button>
          </div>
        );
        break;
      case 3:
        return (
          <div>
            <h4>Payment details:</h4>
            <label for="cc">Credit card number </label>
            <input type="text" value={this.state.cc} name="cc" onChange={this.handleChange} />
            <br />
            <br />
            <label for="expiry">Expiry date </label>
            <input type="date" value={this.state.expiry} name="expiry" onChange={this.handleChange} />
            <br />
            <br />
            <label for="cvv">CVV </label>
            <input type="password" value={this.state.cvv} name="cvv" onChange={this.handleChange} />
            <br />
            <br />
            <label for="bzip">Billing zip code </label>
            <input type="text" value={this.state.bzip} name="bzip" onChange={this.handleChange} />
            <br />
            <br />
            <button onClick={this.handleClick}>Next</button>
          </div>
        );
        break;
      case 4:
        return (
          <div>
            <h4>Confirmation page</h4>
            <br />
            <h5>You entered: </h5>
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <p>Password:  <em>hidden</em></p>
            <br />
            <p>Address (line 1): {this.state.addr1}</p>
            <p>Address (line 2): {this.state.addr2}</p>
            <p>City: {this.state.city}</p>
            <p>State: {this.state.state}</p>
            <p>Zip code: {this.state.zip}</p>
            <p>Phone: {this.state.phone}</p>
            <br />
            <p>Credit card number: {this.state.cc}</p>
            <p>CVV:  <em>hidden</em></p>
            <p>Billing zip code: {this.state.bzip}</p>
            <br />
            <br />
            <button onClick={this.handleClick}>Purchase</button>
          </div>
        );
        break;
    }

  }
}


ReactDOM.render(<App />, document.getElementById("app"));
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './services/frontierApiService';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      accounts: []
    }
  }

  componentDidMount() {
    getData().then(data => this.setState({ accounts: data }));
  }

  render() {
    return (
      <article class="grid">
      <header class="grid">
        <div class="title-container">
          <h1>Coding Test</h1>
        </div>
      </header>
      <main class="content grid" id="home-content">
        <div class="content-title-container">
          <h2>Accounts</h2>
        </div>
        <section class="grid" id="account-grid">
          <section class="account-column grid" id="active-account-column">
            <div class="account-container-title" id="active-account-container-title">
              <h3>Active</h3>
            </div>
            <div class="account-container active-account">
              <ul class="account-data-list">
                {this.state.accounts[0] ? console.log(this.state.accounts[0]["FirstName"]) : ""}

                {/* <li><label>Name:</label>{{LastName}}, {{FirstName}}</li>
                <li><label>Email:</label>{{Email}}</li>
                <li><label>Phone Number:</label>{{PhoneNumber}}</li>
                <li><label>Amount Due:</label>{{AmountDue}}</li>
                <li><label>Due Date:</label>{{DueDate}}</li> */}
              </ul>
            </div>     
          </section>
          <section class="account-column grid" id="overdue-account-column">
            <div class="account-container-title" id="overdue-account-container-title">
              <h3>Overdue</h3>
            </div>
            <div class="account-container overdue-account">
              <ul class="account-data-list">
                {/* <li><label>Name:</label>{{LastName}}, {{FirstName}}</li>
                <li><label>Email:</label>{{Email}}</li>
                <li><label>Phone Number:</label>{{PhoneNumber}}</li>
                <li><label>Amount Due:</label>{{AmountDue}}</li>
                <li><label>Due Date:</label>{{DueDate}}</li> */}
              </ul>
            </div>
          </section>
          <div class="account-column grid" id="inactive-account-column">
            <div class="account-container-title" id="inactive-account-container-title">
              <h3>Inactive</h3>
            </div>
            <div class="account-container inactive-account">
              <ul class="account-data-list">
                {/* <li><label>Name:</label>{{LastName}}, {{FirstName}}</li>
                <li><label>Email:</label>{{Email}}</li>
                <li><label>Phone Number:</label>{{PhoneNumber}}</li>
                <li><label>Amount Due:</label>{{AmountDue}}</li>
                <li><label>Due Date:</label>{{DueDate}}</li> */}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer class="grid">
        <p class="copy">&copy;<script>document.write(new Date().getFullYear())</script></p>
      </footer>
    </article>
    );
  }
}

export default App;

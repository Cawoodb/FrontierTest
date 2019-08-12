import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './services/frontierApiService';
import AccountList from './Components/AccountList'

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
    let accounts = this.state.accounts;
    let activeAccounts = accounts.filter(account => account["AccountStatusId"] === 0);
    let inactiveAccounts = accounts.filter(account => account["AccountStatusId"] === 1);
    let overdueAccounts = accounts.filter(account => account["AccountStatusId"] === 2);

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
        <div class="grid" id="account-grid">
          <div class="account-column grid" id="active-account-column">
            <div class="account-container-title" id="active-account-container-title">
              <h3>Active</h3>
            </div>
            <div className="account-container active-account">
              {activeAccounts ? <AccountList accounts={activeAccounts}/> : "" }  
            </div>     
          </div>
          <div class="account-column grid" id="overdue-account-column">
            <div class="account-container-title" id="overdue-account-container-title">
              <h3>Overdue</h3>
            </div>
            <div class="account-container overdue-account">
              { overdueAccounts ? <AccountList accounts={overdueAccounts}/> : "" }  
            </div>
          </div>
          <div class="account-column grid" id="inactive-account-column">
            <div class="account-container-title" id="inactive-account-container-title">
              <h3>Inactive</h3>
            </div>
            <div class="account-container inactive-account">
              { inactiveAccounts ? <AccountList accounts={inactiveAccounts}/> : "" } 
            </div>
          </div>
        </div>
      </main>
      <footer class="grid">
        <p class="copy">&copy;<script>document.write(new Date().getFullYear())</script></p>
      </footer>
    </article>
    );
  }
}

export default App;

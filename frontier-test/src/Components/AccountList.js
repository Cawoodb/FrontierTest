import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Account from './Account';

export default class AccountList extends Component {

  static get propTypes() {
    return {
        accounts: PropTypes.array
    };
}
  render() {
    let accounts = this.props.accounts;
    return(
      <div>
        {accounts ? accounts.map( account => <Account account={account} key={account["Id"]}/>) : ""}
      </div>
    );
  }
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Account extends Component {

    static get propTypes() {
        return {
            account: PropTypes.object
        };
    }

    formatPhoneNumber = (phoneNumber) => {
        let formattedPhoneNumber = phoneNumber;
        if(typeof phoneNumber === 'string' && phoneNumber.length === 10){
            formattedPhoneNumber = `(${phoneNumber.substring(0,3)})-${phoneNumber.substring(3,6)}-${phoneNumber.substring(6,10)}`;
        }
        return formattedPhoneNumber;
    }

    render() {
        let account = this.props.account;
        let dueDate = moment(account["DueDate"]);
        let dueDateIsValid = dueDate.isValid();
        if(dueDateIsValid){
            dueDate = dueDate.format('MM/DD/YYYY');
        }
        
        let name = `${account["LastName"]}, ${account["FirstName"]}`;
        let amountDue = `$${account["AmountDue"]}`;
        let isActive = account["AccountStatusId"] !== 1;
        
        return(
            <div className = "account">
                <div className="account-prop"><label>Name:</label>{name}</div>
                <div className="account-prop"><label>Email:</label>{account["Email"]}</div>
                <div className="account-prop"><label>Phone Number:</label>{this.formatPhoneNumber(account["PhoneNumber"])}</div>
                <div className="account-prop"><label>Amount Due:</label>{amountDue}</div>
                { dueDateIsValid ? <div className="account-prop"><label>Due Date:</label>{dueDate}</div> : ""}
            </div>
        );
    }
};
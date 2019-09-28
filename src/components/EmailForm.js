import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ message: 'Thank you!' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    const { message } = this.state;
    return (
      //<form id="signup-form" onSubmit={this.onSubmit} method="post" action="https://formspree.io/a.robson755@gmail.com">
      <form id="signup-form" method="post" action="https://formspree.io/suitabilityCIC@gmail.com">
        <input
          type="email"
          name="_replyto"
          id="email"
          placeholder="Email Address"
          required 
        />
        <input type="submit" value="Keep me updated!" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;

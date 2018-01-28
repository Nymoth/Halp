import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HalpRoot from './HalpRoot.jsx';
import HalpButton from './HalpButton.jsx';
import HalpChat from './HalpChat.jsx';

const uuid = require('uuid/v1');

class Halp extends Component {
  constructor() {
    super();

    this.toggleChat = this.toggleChat.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentWillMount() {
    this.setState({
      open: false,
      input: '',
      messages: []
    });

    this.props.messages
      .findAll({ sessionId: this.props.sessionId })
      .order('datetime', 'ascending')
      .limit(50)
      .watch()
      .subscribe(data => this.setState({ messages: data }));
  }

  toggleChat() {
    this.setState({ open: !this.state.open });
  }

  changeMessage(evt) {
    this.setState({ input: evt.target.value });
  }

  sendMessage(evt) {
    evt.preventDefault();
    this.props.messages.store({
      id: uuid(),
      sessionId: this.props.sessionId,
      by: '__user',
      text: this.state.input,
      datetime: new Date()
    })
      .subscribe(() => this.setState({ input: '' }));
  }

  render() {
    return (
      <HalpRoot>
        <HalpChat
          open={this.state.open}
          input={this.state.input}
          messages={this.state.messages}
          inputChangeHandler={this.changeMessage}
          submitMessageHandler={this.sendMessage} />
        <HalpButton
          open={this.state.open}
          clickHandler={this.toggleChat} />
      </HalpRoot>
    );
  }
}

Halp.propTypes = {
  messages: PropTypes.object,
  sessionId: PropTypes.string
};

export default Halp;

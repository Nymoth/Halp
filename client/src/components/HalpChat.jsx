import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import StayScrolled from 'react-stay-scrolled';

import HalpMessage from './HalpMessage.jsx';

const HalpChatWrapper = styled('div')`
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 8px;
  background: #f1ff24;
  box-shadow: 1px 1px 1px #cbce9a;
  width: 300px;
  position: relative;
  display: ${props => (props.hidden ? 'none' : 'block')};

  .messages {
    height: 300px;
    background: #fff;
    overflow-y: auto;
    border-radius: 5px;
    box-shadow: inset 1px 1px #cbce9a;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;

    &:before {
      content: '';
      flex: 1 1 auto;
    }
  }

  .input {
    margin-top: 5px;

    .input-control {
      border: none;
      border-radius: 5px;
      height: 30px;
      box-shadow: inset 1px 1px #cbce9a;
      font-size: 14px;
      padding: 0 5px;
      width: 100%;
    }
  }
`;

const HalpChat = ({ open, input, messages, inputChangeHandler, submitMessageHandler }) => (
  <HalpChatWrapper hidden={!open}>
    <StayScrolled className="messages" component="div">
      {messages.map(message => <HalpMessage message={message} key={message.id} />)}
    </StayScrolled>
    <form className="input" onSubmit={submitMessageHandler}>
      <input className="input-control" type="text" value={input} onChange={inputChangeHandler} autoFocus />
    </form>
  </HalpChatWrapper>
);

HalpChat.propTypes = {
  open: PropTypes.bool,
  input: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    sessionId: PropTypes.string,
    by: PropTypes.string,
    text: PropTypes.string,
    datetime: PropTypes.instanceOf(Date)
  })),
  inputChangeHandler: PropTypes.func,
  submitMessageHandler: PropTypes.func
};

export default HalpChat;

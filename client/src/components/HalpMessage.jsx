import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { scrolled } from 'react-stay-scrolled';

const HalpMessageWrapper = styled('div')`
  max-width: 70%;
  margin: 3px 5px;
  padding: 5px 10px;
  border-radius: 3px;
  flex-shrink: 0;
  text-overflow: ellipsis;
  overflow-x: hidden;
  align-self: flex-${props => (props.byUser ? 'end' : 'start')}
  background: #${props => (props.byUser ? 'f6f9d2' : 'eaeaea')}
`;

class HalpMessage extends Component {
  componentDidMount() {
    this.props.scrollBottom();
  }

  render() {
    return (
      <HalpMessageWrapper byUser={this.props.message.by === '__user'}>
        {this.props.message.text}
      </HalpMessageWrapper>
    );
  }
}

HalpMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    sessionId: PropTypes.string,
    by: PropTypes.string,
    text: PropTypes.string,
    datetime: PropTypes.instanceOf(Date)
  }),
  stayScrolled: PropTypes.func,
  scrollBottom: PropTypes.func
};

export default scrolled(HalpMessage);

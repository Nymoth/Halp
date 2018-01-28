import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { X, MessageCircle } from 'react-feather';

const HalpButtonWrapper = styled('div')`
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 63px;
  border-radius: 10px;
  background: #F1FF24;
  box-shadow: 1px 1px 1px #cbce9a;
  cursor: pointer;
  transition: background .2s;
  float: right;

  &:hover {
    background: #d1dc2f;
  }
`;

const HalpButton = ({ open, clickHandler }) => (
  <HalpButtonWrapper onClick={clickHandler}>
    {open ? <X /> : <MessageCircle />}
  </HalpButtonWrapper>
);

HalpButton.propTypes = {
  open: PropTypes.bool,
  clickHandler: PropTypes.func
};

export default HalpButton;

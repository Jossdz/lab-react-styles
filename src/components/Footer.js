import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  color: white;
  background-color: black;
`;

const FooterComponent = () => (
  <Footer>
    <p>@ 2019</p>
  </Footer>
);

export default FooterComponent;

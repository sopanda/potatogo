import React from 'react';
import styled from 'styled-components';
import { Sidebar } from 'components/Sidebar';
import { theme } from 'themes';

const ContentWrapper = styled.div`
  color: ${() => theme.colors.white};
  height: 100%;
  position: relative;
  float: right;
  padding: 1.5rem 1rem;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(100% - 170px);
  }
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = ({ children }) => (
  <Section>
    <Sidebar />
    <ContentWrapper>{children}</ContentWrapper>
  </Section>
);

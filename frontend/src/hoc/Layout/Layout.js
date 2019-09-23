import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation';
import { LayoutWrapper } from 'components/Wrappers/LayoutWrapper';

export const Layout = props => {
  const black = useSelector(state => state.dark);

  return (
    <LayoutWrapper black={black}>
      <Navigation />
      <main className='Main'>{props.children}</main>
    </LayoutWrapper>
  );
};

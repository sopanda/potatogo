import React, { Fragment } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { NavLink as RRNavLink } from 'react-router-dom';
import { SidebarWrapper } from 'components/Wrappers/SidebarWrapper';
import { SidebarNavigationWrapper } from 'components/Wrappers/SidebarNavigationWrapper';

export const Sidebar = ({ nav, toggle }) => {
  const { t: translate } = useTranslation();
  const navItems = (
    <Nav vertical>
      <NavItem>
        <NavLink
          tag={RRNavLink}
          activeClassName='active'
          to='/'
          onClick={toggle}
          exact
        >
          {translate('sidebar.home')}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          tag={RRNavLink}
          to='/dashboard/orders/history'
          activeClassName='active'
          onClick={toggle}
          exact
        >
          {translate('sidebar.orders.history')}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          tag={RRNavLink}
          to='/dashboard/offers/history'
          activeClassName='active'
          onClick={toggle}
          exact
        >
          {translate('sidebar.offers.history')}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          tag={RRNavLink}
          to='/dashboard/offer/new'
          activeClassName='active'
          onClick={toggle}
          exact
        >
          {translate('sidebar.new.offer')}
        </NavLink>
      </NavItem>
    </Nav>
  );

  const bar = nav ? (
    <SidebarNavigationWrapper>{navItems}</SidebarNavigationWrapper>
  ) : (
    <SidebarWrapper>{navItems}</SidebarWrapper>
  );

  return <Fragment>{bar}</Fragment>;
};

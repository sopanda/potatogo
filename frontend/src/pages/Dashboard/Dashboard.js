import React from 'react';
import { Content } from 'shared/components/Content';
import { OfferCreation } from './components/OfferCreation';
import { User } from './components/User';
import { History } from './components/History';

const Dashboard = ({ location: { pathname } }) => (
  <Content>
    {pathname === '/dashboard' && <User />}
    {pathname === '/dashboard/offer/new' && <OfferCreation />}
    {pathname === '/dashboard/orders/history' && <History />}
    {pathname === '/dashboard/offers/history' && <History />}
  </Content>
);

export default Dashboard;

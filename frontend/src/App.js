import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Geolocation from 'react-geolocation';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Registration from 'pages/Registration';
import Dashboard from 'pages/Dashboard';
import { PrivateRoute } from 'components/PrivateRoute';
import { Layout } from 'hoc/Layout';
import { setUserLocation } from 'store/UserLocation/actions';

const App = React.memo(() => {
  const dispatch = useDispatch();

  const handlePosition = position => {
    const { coords } = position;
    dispatch(setUserLocation(coords));
  };

  return (
    <>
      <Layout>
        <Suspense fallback={'Loading...'}>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Registration} />
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
          </Switch>
          <Geolocation onSuccess={handlePosition} />
        </Suspense>
      </Layout>
    </>
  );
});

export default App;

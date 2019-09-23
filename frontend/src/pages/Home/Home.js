import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Map from 'components/Map';
import { Loader } from 'components/Loader';
import { getAllOffers } from 'store/Offer/actions';

const Home = () => {
  const { longitude, latitude } = useSelector(state => state.location);
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.offer);
  useEffect(() => {
    dispatch(getAllOffers());
  }, [dispatch]);

  return longitude && latitude ? (
    <Map
      longitude={longitude}
      latitude={latitude}
      data-test='Map'
      type='home'
      markers={data}
    />
  ) : (
    <Loader />
  );
};

export default Home;

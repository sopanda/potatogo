import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Field } from 'redux-form';
import { FormGroup } from 'reactstrap';
import { Marker } from 'react-leaflet';
import Map from 'components/Map';
import { RenderField } from 'components/RenderField';
import OfferCreationForm from 'components/OfferCreationForm';
import { Loader } from 'components/Loader';
import Routing from 'components/Routing';
import { DestinationMenu } from 'components/DestinationMenu';
import { Title } from 'shared/components/Title';
import { Button } from 'shared/components/Button';
import { geocode } from 'helpers/geocode';
import { getDistanceFromLatLonInKm } from 'helpers/getDistanceFromLatLonInKm';
import { required } from 'helpers/validation';
import { offerCreation } from 'store/Offer/actions';

export const OfferCreation = React.memo(() => {
  const { t: translate } = useTranslation();
  const { latitude, longitude } = useSelector(state => state.location);
  const [start, setStart] = useState(null);
  const [finish, setFinish] = useState(null);
  const [startAddress, setStartAddress] = useState(null);
  const [finishAddress, setFinishAddress] = useState(null);
  const [distance, setDistance] = useState(0);
  const dispatch = useDispatch();

  const type = useSelector(state => state.contextMenuType);

  let map = useRef();

  useEffect(() => {
    if (start && finish) {
      const dist = getDistanceFromLatLonInKm(start, finish);
      setDistance(dist);
      const sPoint = geocode(start);
      const fPoint = geocode(finish);
      setStartAddress(sPoint);
      setFinishAddress(fPoint);
    }
  }, [start, finish]);

  const addMarker = e => {
    const pos = e.latlng;
    type === 'start' && setStart(pos);
    type === 'finish' && setFinish(pos);
  };

  const submit = ({ description, price, est_delivery_date }) => {
    const offer = {
      start_destination: start,
      finish_destination: finish,
      price,
      distance,
      description,
      est_delivery_date
    };
    start && finish && dispatch(offerCreation(offer));
  };

  return latitude && longitude ? (
    <Container fluid>
      <Row>
        <Col>
          <Title>{translate('dashboard.new.offer.title')}</Title>
        </Col>
      </Row>
      <Row>
        <Col sm='12' md='12' lg='8'>
          <Map
            latitude={latitude}
            longitude={longitude}
            type='create'
            addMarker={addMarker}
            ref={mapRef => {
              if (mapRef) {
                map.current = mapRef;
              }
            }}
          >
            {start && <Marker position={start} />}
            {finish && <Marker position={finish} />}
            {start && finish && map.current && (
              <Routing map={map} from={start} to={finish} />
            )}
          </Map>
          <DestinationMenu />
        </Col>
        <Col sm='12' md='12' lg='4' className='my-auto'>
          <OfferCreationForm onSubmit={submit}>
            <FormGroup>
              <Field
                name='start_point'
                component={RenderField}
                type='pointA'
                fieldValue={startAddress}
              />
            </FormGroup>
            <FormGroup>
              <Field
                name='destination_point'
                component={RenderField}
                type='pointB'
                fieldValue={finishAddress}
              />
            </FormGroup>
            <FormGroup>
              <Field
                name='distance'
                component={RenderField}
                type='distance'
                fieldValue={distance}
              />
            </FormGroup>
            <FormGroup>
              <Field
                name='price'
                component={RenderField}
                type='price'
                validate={[required]}
              />
            </FormGroup>
            <FormGroup>
              <Field
                name='est_delivery_date'
                type='date'
                component={RenderField}
                validate={[required]}
              />
            </FormGroup>
            <FormGroup>
              <Field
                name='description'
                component={RenderField}
                type='description'
              />
            </FormGroup>
            <FormGroup>
              <Button type='submit'>
                {translate('dashboard.new.offer.button')}
              </Button>
            </FormGroup>
          </OfferCreationForm>
        </Col>
      </Row>
    </Container>
  ) : (
    <Loader />
  );
});

import React from 'react';
import { shallow } from 'enzyme';
import Home from './';
import Map from 'components/Map';

describe('Navigation component tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('should render correctly with no props', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render a map', () => {
    expect(component.find(Map)).toHaveLength(1);
  });
});

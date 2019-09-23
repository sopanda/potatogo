import React from 'react';
import { shallow } from 'enzyme';
import Map from './';

describe('Map component tests', () => {
  let component;
  let coords = {
    latitude: 50.041187,
    longitude: 21.999121
  };
  beforeEach(() => {
    component = shallow(<Map coords={coords} />);
  });

  it('should render correctly with props', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have props with location', () => {
    expect(component.props().coords).toBeUndefined();
  });
});

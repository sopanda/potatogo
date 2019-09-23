import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation component tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Navigation />);
  });

  // it('should render correctly with no props', () => {
  //   expect(component).toMatchSnapshot();
  // });

  it('should render a logo', () => {
    const logo = component.find('.BrandLogo');
    expect(logo.length).toBe(1);
  });

  it('should have language change dropdown', () => {
    const langDropdown = component.find('.LanguageDropdown');
    expect(langDropdown.length).toBe(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from './';

describe('Layout component tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Layout>
        <div>Children</div>
      </Layout>
    );
  });

  // it('should render correctly with props', () => {
  //   expect(component).toMatchSnapshot();
  // });

  it('should have a children', () => {
    expect(component.find('.Main').props().children).toEqual(
      <div>Children</div>
    );
  });
});

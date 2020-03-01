import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByDataAttr } from '../../utils';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('Should render a logo', () => {
    const wrapper = findByDataAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });
});

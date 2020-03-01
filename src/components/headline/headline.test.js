import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByDataAttr } from '../../utils';

const setup = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe('Headline component', () => {
  describe('Have props', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: 'Test header',
        desc: 'Test description'
      };
      wrapper = setup(props);
    });

    it('Should render without error', () => {
      const component = findByDataAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a H1', () => {
      const component = findByDataAttr(wrapper, 'header');
      expect(component.length).toBe(1);
    });

    it('Should render a Desc', () => {
      const component = findByDataAttr(wrapper, 'description');
      expect(component.length).toBe(1);
    });
  });

  describe('Have NO props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup();
    });

    it('Should not render', () => {
      const component = findByDataAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(0);
    });
  });
});

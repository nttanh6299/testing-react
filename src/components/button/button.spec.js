import React from 'react';
import { findByDataAttr } from '../../utils';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button Component', () => {
  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        text: 'Button',
        emitEvent: () => {}
      };
      wrapper = shallow(<Button {...props} />);
    });

    it('Should render a button', () => {
      const button = findByDataAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});

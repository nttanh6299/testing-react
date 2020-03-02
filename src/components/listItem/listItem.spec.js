import React from 'react';
import { shallow } from 'enzyme';
import { findByDataAttr } from '../../utils';
import ListItem from './index';

describe('ListItem Component', () => {
  describe('Component renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example title',
        desc: 'Some text'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should renders without error', () => {
      const component = findByDataAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByDataAttr(wrapper, 'title');
      expect(title.length).toBe(1);
    });

    it('Should render a des', () => {
      const desc = findByDataAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Some text'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Component is not rendered', () => {
      const component = findByDataAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});

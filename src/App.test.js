import React from 'react';
import { shallow } from 'enzyme';
import { findByDataAttr, testStore } from './utils';
import App from './App';

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Title 1',
          body: 'Body 1'
        },
        {
          title: 'Title 2',
          body: 'Body 2'
        },
        {
          title: 'Title 3',
          body: 'Body 3'
        }
      ]
    };
    wrapper = setup(initialState);
  });

  it('Should render without error', () => {
    const component = findByDataAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});

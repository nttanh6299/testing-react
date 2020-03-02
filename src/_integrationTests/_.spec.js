import moxios from 'moxios';
import { testStore } from '../utils';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Store is updated correctly', done => {
    const expectedState = [
      {
        title: 'Example title 1',
        body: 'Some text'
      },
      {
        title: 'Example title 2',
        body: 'Some text'
      },
      {
        title: 'Example title 3',
        body: 'Some text'
      }
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toMatchObject(expectedState);
      done();
    });
  });
});

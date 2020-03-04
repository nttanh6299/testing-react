import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/header';
import Headline from './components/headline';
import Button from './components/button';
import ListItem from './components/listItem';
import './App.scss';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true
  }
];

const propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool
    })
  )
};

const initialState = {
  hideBtn: false
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  fetch = () => {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  };

  exampleMethod_updatesState = () => {
    const { hideBtn } = this.state;
    this.setState({ hideBtn: !hideBtn });
  };

  exampleMethod_returnsValue(number) {
    return number + 1;
  }

  render() {
    const { hideBtn } = this.state;
    const { posts } = this.props;

    const configButton = {
      text: 'Get posts',
      emitEvent: this.fetch
    };

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          {!hideBtn && <Button {...configButton} />}
          <div>
            {posts.map((post, index) => {
              return (
                <ListItem key={index} title={post.title} desc={post.body} />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);

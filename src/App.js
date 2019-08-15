import React, {Component} from 'react';
import Header from './components/header';
import './App.scss';
import Headline from './components/headline/';
import ListItem from './components/listitem';
import {connect} from 'react-redux';
import {fetchPosts} from './actions/index';
import SharedButton from './components/button/index';

const tempArr = [{
  fName: 'Jake',
  lName: 'Doe',
  email: 'john@doe.com',
  age: 24,
  onlineStatus: false
}]

class App extends Component {

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch = () => {
    this.props.fetchPosts()
  }

  render() {
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }
    console.log('props',this.props)
    return (

      <div className="App">
        <Header/>
        <section className="main">
        <Headline header="Posts" desc="Click the button to render Posts!" tempArr={tempArr}/>
        <SharedButton {...configButton}/>
        {this.props.posts.postReducer.length > 0 &&
          <div>
            {this.props.posts.postReducer.map((post, index) => {
              console.log('post', post)
              const configListProps = {
                title: post.title,
                description: post.body
              }
              return (
                <ListItem key={index} {...configListProps}/>
              )
            })}
          </div>
        }
        </section>
      </div>
    );
  }

  
}

const mapStateToProps = state => {
  return {
    posts: state
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);

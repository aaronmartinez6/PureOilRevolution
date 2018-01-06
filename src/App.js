import React, { Component } from 'react';
import './App.css';
import SectionHeader from './components/SectionHeader';
import Quote from './components/Quote';
import NewBlogPost from './components/NewBlogPost';
import BlogPost from './components/BlogPost';
import axios from "axios";

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
    axios.get(`api/posts`)
      .then( response => this.setState({ posts: response.data })).catch(console.log)
    
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">PURE OIL REVOLUTION</h1>
        {/* <h5 className="App-subtitle">Changing the world one DROP at a time.</h5> */}
        <Quote />
        <SectionHeader title="About Us" />
        <p className="About">Hello! We are Tom and Anita Cottam and welcome to our Pure Oil Revolution! As entrepreneurs and Wellness Advocates, we speak, train and educate others on the benefits of natural solutions and informed self-care.

Our mission as a team, is to create confidence in managing your own well-being physically, mentally, spiritually and emotionally. We believe in an active and intuitive approach to life, where we honor our bodies and how we nourish them. We stand for the evolution of every soul we connect with and aspire, collectively to "BE"come our highest purpose in life.

"I love myself" is the quietest, simplest, most powerful revolution EVER.

-Nayyirah Waheed</p>
        {/* <SectionHeader title="Let's get you a sample" /> */}
        <SectionHeader title="Blog" />
        <NewBlogPost />
        {this.state.posts.map(
          post => (
            <div>
              <BlogPost />
              <BlogPost />
              {/* <span>Title: {post.title}</span>
              <span>Text: {post.text}</span> */}
            </div>
          )
        )}
      </div>
    );
  }
}

export default App;

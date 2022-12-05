import React, { Component } from 'react';
import axios from 'axios';

export default class PostDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8000/post/${id}`).then((res) => {
      if(res.data.success){
        this.setState({
          post:res.data.post
        });
      }
    });
  }

  render() {
    const {topic,description,postCategory} = this.state.post; 
    return (
        <div className='container'>
          <h4>{topic}</h4>
          <ul>
            <li>Description: {description}</li>
            <li>Post Category: {postCategory}</li>
          </ul>
        </div>    
    )
  }
}
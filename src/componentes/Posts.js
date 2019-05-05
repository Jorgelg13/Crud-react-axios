import React, { Component } from 'react';
import Listado from './Listado';


class Posts extends Component {
    state = {  }
    render() { 
        return (
            <div className="col-12 col-md-8">
                <h1 className="text-center">Posts</h1>
                <Listado posts ={this.props.posts} borrarPost ={this.props.borrarPost}></Listado>
            </div>
        );
    }
}
 
export default Posts;
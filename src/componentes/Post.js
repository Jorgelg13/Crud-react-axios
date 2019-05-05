import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    render() { 
        const {id, title} = this.props.info;
        return ( 
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td><Link to ={`/post/${id}`} className="btn btn-primary">Ver</Link></td>
                <button onClick={() => this.props.borrarPost(id)
               } className="btn btn-danger" type="button"> borrar</button>
            </tr>
         );
    }
}
 
export default Post;
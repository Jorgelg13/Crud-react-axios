import React, { Component } from 'react';


class SinglePost extends Component {

    mostrarPost = (props) =>{
        if(!this.props.registro) return null;
        const {title,body, userId} = this.props.registro;
        return(
            <React.Fragment>
                <h1>{title}</h1>
                <p>Autor: {userId}</p>
                {body}
            </React.Fragment>
        )
    }
    render() { 
        return (  
            <div className="col-12 col-md-8">
                {this.mostrarPost(this.props)}
            </div>
        );
    }
}
 
export default SinglePost;
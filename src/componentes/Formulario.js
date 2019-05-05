import React, { Component } from 'react';

class Formulario extends Component {

    //creando Refs
    tituloRef = React.createRef();
    contenidoRef = React.createRef();

    crearPost = (e) =>{
        e.preventDefault();

        //leer los refs
        const post ={
            title : this.tituloRef.current.value,
            body: this.contenidoRef.current.value,
            userId: 1
        }
        //enviar por props o peticion de axios
        this.props.crearPost(post);
    }

    render() { 
        return ( 
           <form onSubmit={this.crearPost} className="col-8">
                <lengend className="text-center">Crear nuevo Post</lengend>
                <div className="form-group">
                <label>Titulo del post</label>
                    <input type="text" ref={this.tituloRef} className="form-control" placeholder="titulo"></input>
                </div>
                <div className="form-group">
                <label>Contenido</label>
                    <textarea type="text" ref={this.contenidoRef} className="form-control" placeholder="Contenido"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
           </form>
        );
    }
}
 
export default Formulario;
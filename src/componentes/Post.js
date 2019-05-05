import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class Post extends Component {

    confirmarEliminacion = () =>{
        const {id} = this.props.info;
         
            Swal.fire({
                title: 'Estas seguro?',
                text: "Quieres borrar el registro",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
            }).then((result) => {
                if (result.value) {
                this.props.borrarPost(id);
                Swal.fire(
                    'Registro borrado!',
                    'Tu registro fue borrado.',
                    'Excelente'
                )
                }
            })
    }

    render() { 
        const {id, title} = this.props.info;
        return ( 
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td><Link to ={`/post/${id}`} className="btn btn-primary">Ver</Link></td>
                <button onClick={this.confirmarEliminacion} 
                className="btn btn-danger" type="button"> borrar</button>
            </tr>
         );
    }
}
 
export default Post;
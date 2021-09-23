import React, { Component } from 'react';

class Search extends Component {

    searchRef = React.createRef();

    //Se obtienen los datos ingresados por el usuario mediante handleData
    handleData = (e) => {
        e.preventDefault();

        //Agarra el valor del input
        const termino = this.searchRef.current.value;
        //Envia ese valor al componente principal (App.js)
        this.props.searchData(termino); 
        //el parametro o argumento "termino" se envia mediante props para 
        //guardarse en el state
    }

    render() {
        return ( //El usuario realiza una busqueda (se obtienen lo datos)
            <div className="d-flex justify-content-center">
                <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg"
                            placeholder="Search your Image" />
                    </div> 
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block"
                            value="Search" /> 
                    </div>
                </div>
            </form>
            </div>
        ); 
    }
}

export default Search;

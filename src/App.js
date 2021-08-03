import { Component } from 'react';
import Search from './components/Search';
import Result from './components/Result';

class App extends Component {

  state = {
    termino: '',
    images: [],
    page: ''
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start')
  }

  pageBack = () => {
    // Lee el state de la page actual
    let page = this.state.page;
    // Lee si la pagina es 1 para no ir hacia atras
    if (page === 1) return null;
    // Suma uno a la page actual
    page--;

    // Agrega los cambios al state
    this.setState({
      page
    }, () => {
      this.consultApi();
      this.scroll();
    });

    //console.log(page);
  }

  pageNext = () => {

    // Lee el state de la page actual
    let page = this.state.page;

    // Suma uno a la page actual
    page++;

    // Agrega los cambios al state
    this.setState({
      page
    }, () => {
      this.consultApi();
      this.scroll();
    });

    //console.log(page);
  }

  consultApi = () => {
    const termino = this.state.termino;
    const page = this.state.page;

    const url = `https://pixabay.com/api/?key=22771135-6bb9466a29a10c680ac443b29&q=${termino}&per_page=30&page=${page}`

    fetch(url)
      .then(reply => reply.json())
      .then(result => this.setState({ images: result.hits }))
    console.log(url)
  }

  //el props de searchData se guarda en state
  searchData = (termino) => {
    this.setState({
      termino: termino,
      page: 1
    }, () => {
      this.consultApi(); //se manda a ejecutar como funcion
    })
  }


  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Searcher images</p>
          <Search // En Searcher se pasan los datos para la busqueda (searchData)
            searchData={this.searchData}
          />
        </div>
        <div className="">
          < Result
            images={this.state.images}
            pageBack={this.pageBack}
            pageNext={this.pageNext}
          />
        </div>
      </div>
    );
  }
}

export default App;
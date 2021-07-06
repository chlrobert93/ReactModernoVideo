import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{

  state = {videos: [] }

    //Terminos de envio
  onTermSubmit = async term => {
   console.log(term);

   //Instancia preconfigurada axios ruta para enviar una solicitud
  const response = await youtube.get('/search',{
       params:{
           q: term
       }
   });

     console.log(response);
     this.setState({ videos: response.data.items});
  }; 

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
            </div>
        );
    }
}

export default App;
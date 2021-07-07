import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{

  state = {videos: [], slectedVideo: null };

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

  onVideoSelect = v => {
      console.log('From the App!!',v);
  };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
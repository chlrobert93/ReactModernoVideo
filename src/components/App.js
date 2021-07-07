import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

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
//v= videos
//callback
  onVideoSelect = video => {
      
      console.log('From the App!!',video);
      //Actualizar el video selecionado
      this.setState({selectedVideo: video});
  };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
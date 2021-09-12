import React from 'react';
import './VideoItem.css';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{

  state = {videos: [], slectedVideo: null };


  componentDidMount(){
     this.onTermSubmit('Iron Maiden - The Trooper (En Vivo!) ');  
  };

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
     this.setState({ videos: response.data.items,
        selectedVideo: response.data.items[0]
    });
  };
//v= videos
//callback
  onVideoSelect = video => {
      
      console.log('From the App!!',video);
      //Actualizar el video selecionado
      this.setState({selectedVideo: video});

      //Seleccionar el primer video

    
  };

    render() {
        return (

          <div className="colorPage"> 
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui stackable grid">
                   <div className="ui row">
                       <div className="eleven wide column">
                          <VideoDetail video={this.state.selectedVideo}/>     
                       </div>
                       <div className="five wide column">
                          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                       </div>
                   </div>
                </div>
            </div>
            </div>
        );
    }
}

export default App;
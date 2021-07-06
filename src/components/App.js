import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{
  
    //Terminos de envio
  onTermSubmit = term => {
   console.log(term);
   //Instancia preconfigurada axios
   youtube.get('/search',{
       params:{
           q: term
       }
   });
  }; 

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;
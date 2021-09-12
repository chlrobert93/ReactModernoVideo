import React from 'react';

class SearchBar extends React.Component{
   state = { term: ''};

   onInpiutChange =  event => {
       this.setState({term: event.target.value});

   };   

   onFormSubmit = event => {
        event.preventDefault();

        //Devolución de llamada de componente principal
        //llamarcon state para informar cual es el temino de búsqueda
         this.props.onFormSubmit(this.state.term);
   }

    render(){
        return (
        
            <div className="colorPage search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInpiutChange} />
                    </div>
                </form>
            </div>
 
        );
            
    }

}

export default SearchBar;
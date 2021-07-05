import React from 'react';

class SearchBar extends React.Component{
   state = { term: ''};

   onInpiutChange =  event => {
       this.setState({term: event.target.value});

   };   

   oneFormSubmit = event => {
        event.preventDefault();

        //Devolución de llamada de componente principal
        //callback from parent component

   }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.oneFormSubmit} className="ui form">
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
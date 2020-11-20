import React from "react";

import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

         this.state = {
             term: ''
         };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
    };

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange= {this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton" onClick={e => {e.preventDefault(); this.search(this.state.term);}}>SEARCH</button>
            </div>
         )
     }
}

export default SearchBar;
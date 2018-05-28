import React from "react";

class SearchBar extends React.Component {
    queryRef = React.createRef();

    render() {
        return (
            <div className="search-bar">
                <input 
                    type="text" 
                    ref={this.queryRef} 
                    onKeyUp={() => this.props.searchHits(this.queryRef.current.value)} 
                    placeholder="Search for Restaurants by Name, Cuisine, Location"
                />
            </div>
        )
    }
}

export default SearchBar;
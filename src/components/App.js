import React from 'react';
import Restaurant from './Restaurant';
import SearchBar from './SearchBar';
import Facets from './Facets';
import ResultsSpeed from './ResultsSpeed';
import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

const algolia = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);
const helper = algoliasearchHelper(algolia, 'Restaurants', {
    disjunctiveFacets: ['food_type', 'stars_count', 'payment_options'],
    maxValuesPerFacet: 10,
});

class App extends React.Component {
    state = {
        disjunctiveFacets: {},
        hits: {},
        processingTimeMS: 0,
        nbHits: 0,
        hitsPerPage: 20,
    }
    
    componentDidMount() {
        helper.on("result", this.searchCallback);
        helper.search();
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                helper.setQueryParameter('aroundLatLng', position.coords.latitude + ', ' + position.coords.longitude).search();
            }
        );
    }
    
    searchCallback = (results) => {
        const { hits, processingTimeMS, nbHits, disjunctiveFacets } = results;
        this.setState({
            hits,
            processingTimeMS,
            nbHits,
            disjunctiveFacets,
        });     
    }
    
    searchHits = (query) => {
        helper.setQuery(query).search();
    }
    
    toggleRefine = (attribute, value) => {
        helper.toggleRefine(attribute, value).search();
    }

    toggleStarsRefinement = (value, currentState) => {
        if (!currentState) {
            helper.addNumericRefinement('stars_count', '>=', value);
            helper.addNumericRefinement('stars_count', '<', value + 1).search();
        } else {
            helper.removeNumericRefinement('stars_count', '>=', value);
            helper.removeNumericRefinement('stars_count', '<', value + 1).search();
        }
    }
    
    showMoreHits = () => {
        let hitsPerPage = this.state.hitsPerPage;
        hitsPerPage += 20;
        helper.setQueryParameter('hitsPerPage', hitsPerPage).search();
        this.setState( {hitsPerPage} );
    }

    render() {
        return (
            <div className="app">
                <SearchBar searchHits={this.searchHits} />
                <div className="container">
                    <div className="sidebar">
                        <Facets 
                            facets={this.state.disjunctiveFacets} 
                            toggleRefine={this.toggleRefine} 
                            toggleStarsRefinement={this.toggleStarsRefinement} 
                        />
                    </div>
                    <div className="results">
                        <ResultsSpeed processingTimeMS={this.state.processingTimeMS} nbHits={this.state.nbHits} />
                        {Object.keys(this.state.hits).map(key => 
                            <Restaurant 
                                key={key}
                                index={key}
                                details={this.state.hits[key]}
                            />
                        )}
                        <div 
                            className={this.state.nbHits < 20 ? 'results__show-more results__show-more--hidden': 'results__show-more'} 
                            onClick={this.showMoreHits}
                        >
                            Show More
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
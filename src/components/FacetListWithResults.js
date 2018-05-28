import React from "react";

class FacetListWithResults extends React.Component {
    state = {
        facets: {},
    }

    componentDidMount() {
        if (this.props.details.length) {
            const facets = {};
            Object.keys(this.props.details[0].data).map(key =>
                facets[key] = false,
            )
            this.setState({ facets });
        }
    }

    onClickHandler = (value) => {
        const facets = { ...this.state.facets };
        const currentState = facets[value];
        facets[value] = !currentState;
        this.setState({ facets });
        this.props.toggleRefine(this.props.details[0].name, value);
    }

    render() {
        let facetData = [];
        if (this.props.details.length) {
            facetData = this.props.details[0].data;
        }
        return (
            <div key={this.props.index} className="sidebar__filter">
                <b>{this.props.name}</b>
                {Object.entries(facetData).map((facet, i) =>
                    <div 
                        key={i} 
                        onClick={() => this.onClickHandler(facet[0])} 
                        className={this.state.facets[facet[0]] ? 'sidebar__option sidebar__option--selected': 'sidebar__option'}
                    >
                        <div className="sidebar__type">{facet[0]}</div>
                        <div className="sidebar__results">{facet[1]}</div>    
                    </div>
                )}
            </div>
        )
    }
}

export default FacetListWithResults;
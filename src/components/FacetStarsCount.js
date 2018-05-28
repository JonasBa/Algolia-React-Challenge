import React from "react";

class FacetStarsCount extends React.Component {
    state = {
        facets: {},
    }

    componentDidMount() {
        const facets = {};
        [0, 1, 2, 3, 4, 5].map(key =>
            facets[key] = false,
        )
        this.setState({ facets });
    }

    onClickHandler = (value) => {
        const facets = { ...this.state.facets };
        const currentState = facets[value];
        facets[value] = !currentState;
        this.setState({ facets });
        this.props.toggleStarsRefinement(value, currentState);
    }

    render() {
        return (
            <div key={this.props.index} className="sidebar__filter">
                <b>Rating</b>
                {[0, 1, 2, 3, 4, 5].map(i => 
                    <div 
                        key={i} 
                        className={this.state.facets[i] ? 'sidebar__stars sidebar__stars--selected': 'sidebar__stars'} 
                        onClick={() => this.onClickHandler(i)}
                    >
                        <div className={'sidebar__stars--' + i}></div>
                    </div>
                )}
            </div>
        )
    }
}

export default FacetStarsCount;
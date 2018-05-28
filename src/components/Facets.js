import React from "react";
import FacetListWithResults from "./FacetListWithResults";
import FacetStarsCount from "./FacetStarsCount";

class Facets extends React.Component {
    render() {
        return  (
            <div>
                <FacetListWithResults 
                    key="food_type"
                    index="food_type"
                    name="Cuisine/Food Type"
                    details={Array.from(this.props.facets).filter(facet => facet.name === 'food_type')}
                    toggleRefine={this.props.toggleRefine}
                />
                <FacetStarsCount 
                    key="stars_count"
                    index="stars_count"
                    toggleStarsRefinement={this.props.toggleStarsRefinement}
                />
                <FacetListWithResults 
                    key="payment_options"
                    index="payment_options"
                    name="Payment Options"
                    details={Array.from(this.props.facets).filter(facet => facet.name === 'payment_options')}
                    toggleRefine={this.props.toggleRefine}
                />
            </div>
        )
    }
}

export default Facets;
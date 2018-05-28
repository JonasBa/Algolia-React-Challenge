import React from "react";
import { starsToWidth } from "../helpers";

class Restaurant extends React.Component {
    render() {
        const {
            image_url, 
            name, 
            food_type, 
            neighborhood, 
            price_range, 
            reviews_count, 
            stars_count,
        } = this.props.details;
        return (
            <div className="results__item">
                <div className="results__image">
                    <img src={image_url} alt={name} />
                </div>
                <div className="results__description">
                    <b>{name}</b>
                    <div className="results__reviews">
                        <b>{stars_count}</b>
                        <span className="results__stars">
                        <span style={starsToWidth(stars_count)}></span>
                        </span>
                        <p>({reviews_count} reviews)</p>
                    </div>
                    <p>{food_type} | {neighborhood} | {price_range}</p>
                </div>
            </div>
        )
    }
}

export default Restaurant;
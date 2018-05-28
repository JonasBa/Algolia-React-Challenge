import React from "react";
import Pluralize from 'react-pluralize';
import { millisToSeconds } from "../helpers";

class ResultsSpeed extends React.Component {
    render() {
        const { nbHits, processingTimeMS } = this.props;
        return (
            <div className="results__header">
                <div className="results__numbers"><b><Pluralize singular="result" count={nbHits} /> found</b> in {millisToSeconds(processingTimeMS)} <Pluralize singular="second" count={processingTimeMS} showCount={false} /></div>
                <div className="results__line"></div>
            </div>
        )
    }
}

export default ResultsSpeed;
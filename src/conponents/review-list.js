import React from "react";
import Review from './review';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews
        };
        console.log(this.state.reviews);
    }

    render() {
        let reviews;
        if (this.state.reviews) {
            reviews = this.state.reviews.map((review, index) => <Review key={index} {...review} />);
        }
        return (
            <div className="card bg-dark text-white">
                <div className="card-header bg-danger text-white">
                    Reviews
                </div>
                <div className="card-body">
                    <p>Here's what the critics are saying:</p>
                </div>
                <div className="card-footer">
                    {reviews}
                </div>
            </div>
        );
    }
}
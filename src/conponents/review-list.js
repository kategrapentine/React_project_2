import React from "react";
import Review from './review';
import Stars from './stars';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews
        };
        console.log(this.state.reviews);
    }

    render() {
        console.log(this.props.newReview);
        let ratingsNum = 0;
        for (let x = 0; x < this.state.reviews.length; x++) {
            const element = this.state.reviews[x];
            ratingsNum += element.rating;
        }
        let avg = ratingsNum/this.state.reviews.length;

        let reviews;
        if (this.state.reviews) {
            reviews = this.state.reviews.map((review, index) => <Review key={index} {...review} />);
        }
        return (
            <div className="card bg-dark text-white">
                <div className="card-header bg-danger text-white">
                    <span><Stars value={Math.floor(avg)} /></span>
                    Total Rating:
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
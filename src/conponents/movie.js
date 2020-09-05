import React from 'react';
import ReviewList from './review-list';
import ReviewForm from './review-form';
import Stars from './stars';

let reviews = [
    {
        rating: 1,
        content: "This was a very bad movie"
    },
    {
        rating: 5,
        content: "This is my new favorite film!!!"
    }
];

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: "",
        };
        this.addReview = this.addReview.bind(this);
    }

    addReview(object) {
        reviews.push(object);
        return reviews;
    }



    render() {
        let ratingsNum = 0;
        for (let x = 0; x < reviews.length; x++) {
            const element = reviews[x];
            ratingsNum += element.rating;
        }
        let avg = ratingsNum/reviews.length;

        // let avg = ratingsArray => ratingsArray.reduce((a,b) => a + b, 0) / ratingsArray.length;
        console.log(avg);
        // let avgRounded = Math.ceil(avg);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card bg-dark text-white mb-5">
                            <div className="card-header bg-danger">
                                <span><Stars value={Math.floor(avg)} /></span>
                                <h5 className="card-title">{this.props.title}</h5>
                                  
                            </div>
                            <div className="card-body">
                                <p className="card-text">{this.props.summary}</p>
                            </div>
                            <img className="card-img-bottom" src={this.props.poster} alt="Movie Poster"/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <ReviewForm  movie={this.props.title} {...{reviews: reviews}} action={this.addReview} />
                        <br></br>
                        <ReviewList {...{reviews: reviews}} />
                        <br></br>
                    </div>
                </div>
            </div>




        )
    }
}
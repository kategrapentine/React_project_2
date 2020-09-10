import React from 'react';
import ReviewList from './review-list';
import ReviewForm from './review-form';
import Review from './review';
import Stars from './stars';

const reviews = [
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
            ratingAvg: 0,
            reviewArray: [    
            {
                rating: 1,
                content: "This was a very bad movie"
            },
            {
                rating: 5,
                content: "This is my new favorite film!!!"
            }]
        };
        this.addReview = this.addReview.bind(this);
    }

    addReview(event, object) {
        // let ratingsNum = 0;
        // let updatedArray = [...this.state.reviewArray, object];
        // this.setState({ reviewArray: updatedArray });
        console.log(this.state.reviewArray);
        // reviews.push(object);
        // console.log(reviews); 
        this.setState(state => {
            state.reviewArray = [...state.reviewArray, object];
            return state
        });


        event.preventDefault();
    }

    render() {
        // const reviews = this.state
        //     ? this.state.reviewArray.map((review, index) => <Review key={index} {...review} />)
        //     :null;
        let reviews;
        if (this.state.reviewArray) {
            reviews = this.state.reviewArray.map((review, index) => <Review key={index} {...review} />);
        }
        
        let ratingsNum = 0;
        for (let x = 0; x < reviews.length; x++) {
            const element = reviews[x];
            ratingsNum += element.rating;
        }
        let avg = ratingsNum/reviews.length;


        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card bg-dark text-white mb-5">
                            <div className="card-header bg-danger">
                                {/* <span><Stars value={Math.floor(avg)} /></span> */}
                                <h5 className="card-title">{this.props.title}</h5>
                                  
                            </div>
                            <div className="card-body">
                                <p className="card-text">{this.props.summary}</p>
                            </div>
                            <img className="card-img-bottom" src={this.props.poster} alt="Movie Poster"/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <ReviewForm addReview={ this.addReview } />
                        <br></br>
                        <ReviewList reviews={reviews} />
                        <br></br>
                    </div>
                </div>
            </div>




        )
    }
}
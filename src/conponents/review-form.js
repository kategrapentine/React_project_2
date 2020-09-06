import React from "react";
import Reviewlist from "./review-list";

// let newReview = [
//     {
//         rating: 1,
//         content: "This was a very bad movie"
//     },
//     {
//         rating: 5,
//         content: "This is my new favorite film!!!"
//     }
// ];

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            rating: 1,
            newReview: [
                {
                    rating: 1,
                    content: "This was a very bad movie"
                },
                {
                    rating: 5,
                    content: "This is my new favorite film!!!"
                }
            ]
        };
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeSelect(event) {
        this.setState({rating: event.target.value});
    }

    handleChangeInput(event) {
        this.setState({content: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(`${this.state.content} ${this.state.rating}`);
        let srating = Number(this.state.rating);
        let scontent = this.state.content;
        let newObject = {rating: srating, content: scontent};
        
        console.log(newObject);
        let updatedArray = [...this.state.newReview, newObject]
        this.setState({ newReview: updatedArray });
        console.log(this.state.newReview);
    }
    

    render() {
        

        return (
            <div className="card bg-dark text-white">
                <div className="card-header bg-danger text-white">
                    Reviews
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <input name="content" type="text" placeholder="What did you think of this film?" className="form-control" onChange={this.handleChangeInput}></input>
                        <h5>Rating ★:</h5>
                        <select defaultValue="1" name="rating" className="form-control" onChange={this.handleChangeSelect}>
                            <option value="1">★☆☆☆☆</option>
                            <option value="2">★★☆☆☆</option>
                            <option value="3">★★★☆☆</option>
                            <option value="4">★★★★☆</option>
                            <option value="5">★★★★★</option>
                        </select>
                        <br></br>
                        {/* <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="one" name={this.props.movie} value="1"></input>
                            <label className="form-check-label" htmlFor="one">1</label>

                            <input className="form-check-input" type="radio" id="two" name={this.props.movie} value="2"></input>
                            <label className="form-check-label" htmlFor="two">2</label>

                            <input className="form-check-input" type="radio" id="three" name={this.props.movie} value="3"></input>
                            <label className="form-check-label" htmlFor="three">3</label>

                            <input className="form-check-input" type="radio" id="four" name={this.props.movie}value="4"></input>
                            <label className="form-check-label" htmlFor="four">4</label>

                            <input className="form-check-input" type="radio" id="five" name={this.props.movie} value="5"></input>
                            <label className="form-check-label" htmlFor="five">5</label>
                        </div> */}
                            <button type="submit" value="Submit" className="btn btn-danger" id="submit-review" >Submit Your Review</button>
                    </form>
                </div>
                <div className="container-fluid">
                    <Reviewlist {...{reviews: this.state.newReview}} />
                </div>
            </div>
        );
    }
}
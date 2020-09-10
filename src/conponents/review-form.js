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
            // newReview: [
            //     {
            //         rating: 1,
            //         content: "This was a very bad movie"
            //     },
            //     {
            //         rating: 5,
            //         content: "This is my new favorite film!!!"
            //     }
            // ]
        };
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.onHandleSubmit = this.onHandleSubmit(this);
    }

    handleChangeSelect(event) {
        this.setState({rating: event.target.value});
        console.log(this.state.rating)
    }

    handleChangeInput(event) {
        this.setState({content: event.target.value});
        console.log(this.state.content)
    }
    
    // handleSubmit(event) {
    //     event.preventDefault();
    //     console.log(`${this.state.content} ${this.state.rating}`);
        // let srating = Number(this.state.rating);
        // let scontent = this.state.content;
    //     let newObject = {rating: srating, content: scontent};
    //     console.log(newObject);
    //     let updatedArray = [...this.state.newReview, newObject]
    //     this.setState({ newReview: updatedArray });
    //     console.log(this.state.newReview);
    // }
    
    handleClick(event) {
        let srating = this.state.rating;
        let scontent = this.state.content;
        let newObject = {rating: Number(srating), content: scontent};
        console.log(srating, scontent);
        this.props.addReview(event, newObject);
    }

    render() {
        

        return (
            <div className="card bg-dark text-white">
                <div className="card-header bg-danger text-white">
                    Write a Review
                </div>
                <div className="card-body">
                        <input type="text" placeholder="What did you think of this film?" className="form-control" onChange={this.handleChangeInput}></input>
                        <h5>Rating ★:</h5>
                        <select defaultValue="1" className="form-control" onChange={this.handleChangeSelect}>
                            <option value="1">★☆☆☆☆</option>
                            <option value="2">★★☆☆☆</option>
                            <option value="3">★★★☆☆</option>
                            <option value="4">★★★★☆</option>
                            <option value="5">★★★★★</option>
                        </select>
                        <br></br>
                        <button className="btn btn-danger" id="submit-review" onClick={this.handleClick} >Submit Your Review</button>
                </div>
            </div>
        );
    }
}
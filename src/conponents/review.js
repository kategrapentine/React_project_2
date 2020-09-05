import React from 'react';
import Stars from "./stars";

export default class Review extends React.Component {
    render() {
        return (
            <div className="card bg-secondary">
                <div className="card-header bg-danger text-white">
                    <Stars value={this.props.rating} />
                </div>
                <div className="card-body">
                    {this.props.content}
                </div>
            </div>
        );
    }
}
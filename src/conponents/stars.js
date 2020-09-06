import React from "react";

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    render() {
        if(this.state.value === 1) {
            return (<h4>★☆☆☆☆</h4>);
        } else if (this.state.value === 2) {
            return (<h4>★★☆☆☆</h4>);
        } else if (this.state.value === 3) {
            return (<h4>★★★☆☆</h4>);
        } else if (this.state.value === 4) {
            return (<h4>★★★★☆</h4>);
        } else if (this.state.value === 5) {
            return (<h4>★★★★★</h4>);
        } else {
            return (<h4>Not Yet Rated</h4>)
        }
        
        
    }
}
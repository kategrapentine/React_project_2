import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    render() {
        return (
            <div className="container-fluid bg-secondary">
                <br></br>
                <Movie 
                    poster="https://images.unsplash.com/photo-1473286835901-04adb1afab03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    title="Romance Movie"
                    summary="A summer love story."
                />
                <Movie 
                    // poster="https://www.joblo.com/assets/images/movie-database/placeholder.jpg"
                    poster="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_480x.progressive.jpg?v=1573587596"
                    title="Action Movie"
                    summary="Our hero must go on an epic journey to defeat the evil villian."
                />
            </div>
        );
    }
}
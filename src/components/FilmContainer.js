import React, { Component } from 'react';
import Film from './Film';
import './FilmContainer.css';

class FilmContainer extends Component {
    // static defaultProps = {
    // }

    // static propTypes = {
    // }


 /*   constructor(props) {
        super(props)

    }*/

    async getFilms() {
        try {
            let films = await fetch('data/movies.json');
            let listeFilms = await films.json();
            this.setState({listeFilms});
        }
        catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getFilms();
    }

    render() {
        if (this.state) {
            const {listeFilms} = this.state;

            return listeFilms['films'].map((film) => (
                    <Film film={film}  fn={()=> console.log('lol')}/>
            ))
        } else {
            return <span>Loading wells...</span>;
        }
    }
}

  export default FilmContainer;
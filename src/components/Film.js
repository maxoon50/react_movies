import React, {Component} from 'react';
import './Film.css'
import UiState from '../store/store';


class Film extends Component{

    choosenFilm = null;

    constructor(props) {
           super(props)
       }
    static propTypes = {

     }

    render(){
           return this.props.listeFilms.map((film) => (
            <div className="cont-img" onClick={()=> UiState.choosenFilm = film}>
                <div className="overflow">
                    <img src={ PATH_TO_IMG + film.img } alt="couverture film"/>
                </div>
                <p>{ film.titre }</p>
            </div>
        ))
    }
}


const PATH_TO_IMG = '/imgs/';



export default Film;
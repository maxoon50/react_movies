import React from 'react';
import './Film.css'

const PATH_TO_IMG = '/imgs/';
const Film = ({film, fn})=>(
    <div className="cont-img">
    <div className="overflow"  onClick={fn}>
        <img src={ PATH_TO_IMG + film.img } alt="couverture film"/>
    </div>
    <p>{ film.titre }</p>
</div>
)


export default Film;
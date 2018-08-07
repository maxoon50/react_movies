import React from 'react';
import './Film.css'

const Film = ({titre,resume,img})=>(
    <div className="cont-img">
    <div className="overflow"  onClick="">
        <img src={ img } />
    </div>
    <p>{ titre }</p>
</div>
)


export default Film;
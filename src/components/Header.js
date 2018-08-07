import React from 'react';
import './Header.css'

const Header = ()=>(
    
      <header>
      <div className="grid">
  
        <div className="grid__title">
          <h2>LES FILMS DU LUNDI</h2>
          <span className="mask"></span>
        </div>
  
        <div className="grid__subtitle">
          <p>Une autre façon de voir le cinéma</p>
          <span className="mask delay"></span>
        </div>
  
      </div>
  
    </header>

)


export default Header;
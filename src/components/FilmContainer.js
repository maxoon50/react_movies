import React, { Component } from 'react';
import Film from './Film';

class FilmContainer extends Component {
    // static defaultProps = {
    // }
  
    // static propTypes = {
    // }
  
    constructor(props) {
      super(props)
      this.getFilms();

    }

    async getFilms(){
        try{
            let films = await fetch('data/movies.json');
             let listeFilms = await films.json();
             this.state = {listeFilms};
        }
        catch(err){
            console.log(err);
        }
    }
  
    render() {
   
    //   return (
    //       this.state.listeFilms.map(({id, titre, img, resume})=>{
    //           <Film titre={titre} resume={resume} img={img}/>
    //       })
        
    //   )
    }
  }


  export default FilmContainer;
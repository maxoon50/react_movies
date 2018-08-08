import {observable ,decorate} from 'mobx';


class UiState {
   choosenFilm = {
         "id": 12,
         "titre": "rangoon",
         "img": "img1.jpg",
         "resume": "You, a bobsleder!? That I'd like to see! And then the battle's not so bad? Soon enough. Interesting. No, wait, the other thing: tedious.Guess again. Oh yeah, good luck with that. Bender, I didn't know you liked cooking. That's so cute. Tell them I hate them. You can see how I lived before I met you. Well I'da done better, but it's plum hard pleading a case while awaiting trial for that there incompetence.Shinier than yours, meatbag. Is that a cooking show? So, how 'bout them Knicks? A sexy mistake. Say what?"
     };
     getChoosenFilm(){
         return {
             "id": 12,
             "titre": "rangoon",
             "img": "img1.jpg",
             "resume": "You, a bobsleder!? That I'd like to see! And then the battle's not so bad? Soon enough. Interesting. No, wait, the other thing: tedious.Guess again. Oh yeah, good luck with that. Bender, I didn't know you liked cooking. That's so cute. Tell them I hate them. You can see how I lived before I met you. Well I'da done better, but it's plum hard pleading a case while awaiting trial for that there incompetence.Shinier than yours, meatbag. Is that a cooking show? So, how 'bout them Knicks? A sexy mistake. Say what?"
         }
     }

}
decorate(UiState, {
    choosenFilm: observable,
})

export default UiState;
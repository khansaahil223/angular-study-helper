import { Card } from "./card";

export class Collection {
    id:number
    title:string
    cards:Card[] 
    constructor(id:number,title:string,cards:Card[]){
        this.id = id
        this.title = title
        this.cards = cards
    }

    trackCardBy(index:number,card:Card){
        return card.id
    }

    getNumberOfCards(id:number):number{                
          return this.cards.length        
      }
      
      getCards():Card[]{
        return this.cards
      }

}
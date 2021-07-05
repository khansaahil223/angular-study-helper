import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards:Card[] = []  
  localStorageCardName = "cards"
  constructor(){
    const localStorageCardName = this.localStorageCardName

    var localStorageCards = localStorage.getItem(localStorageCardName)
    if(!localStorageCards){
      localStorage.setItem(localStorageCardName,"[]")
    }
    else{
      this.cards = JSON.parse(localStorageCards)
    }
  }

  add(card:Card){
    card.id = this.getNewID()
    this.cards.push(card)
    localStorage.setItem(this.localStorageCardName,JSON.stringify(this.cards))
  }

  remove(id:number){
    console.log(id)
    this.cards = this.cards.filter(card=>{return card.id!==id})
    localStorage.setItem(this.localStorageCardName,JSON.stringify(this.cards))
  }

  getNewID(){
    return this.cards.length+1
  }

  getCards(){
    return this.cards
  }

  removeAll(){
    this.cards = []
    localStorage.setItem(this.localStorageCardName,JSON.stringify(this.cards))
  }

}

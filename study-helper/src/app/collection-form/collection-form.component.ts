import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../card';
import { CardService } from '../card.service';
import { Collection } from '../collection';
import { CollectionsService } from '../collections.service';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss']
})
export class CollectionFormComponent implements OnInit {  
  
  errorMessage = ""  

  collection:Collection  

  constructor(public collectionsService:CollectionsService, public cardsService:CardService,private route:ActivatedRoute) {  
    this.collection = collectionsService.getCollection(Number.parseInt(this.route.snapshot.paramMap.get('id')!)) 
    
    if(!this.collection){
      this.collection = new Collection(0,"",cardsService.cards)      
    }
    else{      
      cardsService.removeAll()
      this.collection.cards.forEach(card=>cardsService.add(card))                  
    }
  }

  ngOnInit(): void {
  }  

  removeAllCards(){
    this.cardsService.removeAll()
  }

  save(){
    if(this.collection.title===""){
      this.errorMessage="You must provide a title"
      return
    }    
    if(this.cardsService.cards.length<1){
      this.errorMessage="You must provide at least one card"
      return
    }    
    this.collection.cards = this.cardsService.cards
    this.collectionsService.add(this.collection)    
    this.removeAllCards()
  }

}

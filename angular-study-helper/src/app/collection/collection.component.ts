import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection } from '../collection';
import { CollectionsService } from '../collections.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collection:Collection
  currentCard:number = 0
  loopCards:boolean = true
  constructor(public collectionsService:CollectionsService,private route:ActivatedRoute,public router:Router) { 
    this.collection = collectionsService.getCollection(Number.parseInt(this.route.snapshot.paramMap.get('id')!))    
  }

  ngOnInit(): void {
  }

  prevCard(){
    const i = this.currentCard
    const numberOfCards = this.collection.cards.length
    let defaultIndex = this.loopCards ? numberOfCards - 1 : i
    this.currentCard = i - 1 < 0 ? defaultIndex : this.currentCard - 1
  }

  nextCard(){
    const i = this.currentCard
    const numberOfCards = this.collection.cards.length
    let defaultIndex = this.loopCards ? 0 : i
    this.currentCard = i + 1 >= numberOfCards ? defaultIndex : this.currentCard + 1
  }

}

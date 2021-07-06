import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {    
  
  card:Card = new Card(0,"","","")

  @Output() newCardEvent = new EventEmitter<Card>();
  
  errorText = ""

  constructor(public cardService:CardService) {      
  }

  add(){   
    if(this.card.title==="") {
      this.errorText = "You must provide a title"
      return
    }
    if(this.card.front==="") {
      this.errorText = "You must provide some front content"
      return
    }
    if(this.card.back==="") {
      this.errorText = "You must provide some title content"
      return
    }
    this.newCardEvent.emit(new Card(this.card.id,this.card.title,this.card.front,this.card.back))
  }  

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  inputs:['card']
})
export class CardComponent implements OnInit {  

  card:Card | null = null
  
  constructor(public cardService:CardService) {          
  }

  ngOnInit(): void {
  }

}

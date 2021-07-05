import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../collections.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public collectionsService:CollectionsService) { }

  ngOnInit(): void {
  }

}

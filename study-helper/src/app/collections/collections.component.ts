import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  constructor(public collectionsService:CollectionsService) { }

  ngOnInit(): void {
  }

}

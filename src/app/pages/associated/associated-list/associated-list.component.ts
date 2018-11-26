import { Component, OnInit } from '@angular/core';
import {AssociatedModel} from '../../../models/Associated';
import {AssociatedService} from '../../../services/associated';

@Component({
  selector: 'app-associated-list',
  templateUrl: './associated-list.component.html'
})
export class AssociatedListComponent implements OnInit {

  associated: AssociatedModel[];

  constructor(private associatedService: AssociatedService) {}

  ngOnInit() {
    this.loadAssociated();
  }

  loadAssociated() {
    this.associated = [];
    this.associatedService.get().subscribe(
      (associated) => { this.associated = associated; },
      (err) => { console.log(err); }
    );
  }

}

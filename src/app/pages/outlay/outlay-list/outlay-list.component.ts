import { Component, OnInit } from '@angular/core';
import {AssociatedService} from '../../../services/associated';
import {AssociatedModel} from '../../../models/Associated';
import {OutlayModel} from '../../../models/Outlay';
import {OutlaysService} from '../../../services/outlays';

@Component({
  selector: 'app-income-list',
  templateUrl: './outlay-list.component.html'
})
export class OutlayListComponent implements OnInit {

  outlays: OutlayModel[];

  constructor(private outlayService: OutlaysService, private associatedService: AssociatedService) {}

  ngOnInit() {
    this.loadIncomes();
  }

  loadIncomes() {
    this.outlays = [];
    this.outlayService.get().subscribe(
      async (outlays) => {
        for (const outlay of outlays) {
          outlay.associated = <AssociatedModel>await this.fetchAssociated(outlay.associatedId);
        }
        this.outlays = outlays;
      },
      (err) => { console.log(err); }
    );
  }

  fetchAssociated(id: string) {
    return this.associatedService.find(id).toPromise();
  }

}

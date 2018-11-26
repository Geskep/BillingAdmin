import { Component, OnInit } from '@angular/core';
import {DeductibleModel} from '../../../models/Deducible';
import {DeductiblesService} from '../../../services/deductibles';

@Component({
  selector: 'app-deducible-list',
  templateUrl: './deductible-list.component.html'
})
export class DeductibleListComponent implements OnInit {

  deductibles: DeductibleModel[];

  constructor(private deductibleService: DeductiblesService) {}

  ngOnInit() {
    this.loadDeductibles();
  }

  loadDeductibles() {
    this.deductibles = [];
    this.deductibleService.get().subscribe(
      (deductibles) => { this.deductibles = deductibles; },
      (err) => { console.log(err); }
    );
  }

}

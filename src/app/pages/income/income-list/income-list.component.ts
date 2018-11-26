import { Component, OnInit } from '@angular/core';
import {IncomeModel} from '../../../models/Income';
import {IncomesService} from '../../../services/incomes';
import {AssociatedService} from '../../../services/associated';
import {AssociatedModel} from '../../../models/Associated';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html'
})
export class IncomeListComponent implements OnInit {

  incomes: IncomeModel[];

  constructor(private incomeService: IncomesService, private associatedService: AssociatedService) {}

  ngOnInit() {
    this.loadIncomes();
  }

  loadIncomes() {
    this.incomes = [];
    this.incomeService.get().subscribe(
      async (incomes) => {
        for (const income of incomes) {
          income.associated = <AssociatedModel>await this.fetchAssociated(income.associatedId);
        }
        this.incomes = incomes;
      },
      (err) => { console.log(err); }
    );
  }

  fetchAssociated(id: string) {
    return this.associatedService.find(id).toPromise();
  }

}

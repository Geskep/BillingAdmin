import { Component, OnInit } from '@angular/core';
import {AssociatedModel} from '../../../models/Associated';
import {AssociatedService} from '../../../services/associated';
import {ActivatedRoute, Router} from '@angular/router';
import {IncomeModel} from '../../../models/Income';
import {IncomesService} from '../../../services/incomes';

@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html'
})
export class IncomeFormComponent implements OnInit {

  income: IncomeModel;
  associated: AssociatedModel[];
  updating: boolean;

  constructor(private incomeService: IncomesService, private associatedService: AssociatedService,
              private route: ActivatedRoute, private router: Router) {
    this.income = {} as IncomeModel;
  }

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

  save() {
    this.incomeService[this.updating ? 'update' : 'create'](this.income).subscribe(
      () => { this.router.navigate(['/income/list']); },
      () => {}
    );
  }

}

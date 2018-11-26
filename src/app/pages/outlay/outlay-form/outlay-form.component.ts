import { Component, OnInit } from '@angular/core';
import {AssociatedModel} from '../../../models/Associated';
import {AssociatedService} from '../../../services/associated';
import {ActivatedRoute, Router} from '@angular/router';
import {OutlaysService} from '../../../services/outlays';
import {DeductibleItem, OutlayModel} from '../../../models/Outlay';
import {DeductibleModel} from '../../../models/Deducible';
import {DeductiblesService} from '../../../services/deductibles';
import {IncomesService} from '../../../services/incomes';
import {IncomeModel} from '../../../models/Income';

@Component({
  selector: 'app-outlay-form',
  templateUrl: './outlay-form.component.html'
})
export class OutlayFormComponent implements OnInit {

  outlay: OutlayModel;
  outlays: OutlayModel[];
  associated: AssociatedModel[];
  incomes: IncomeModel[];
  deductibles: DeductibleModel[];

  constructor(private outlaysService: OutlaysService, private associatedService: AssociatedService,
              private deductiblesService: DeductiblesService, private incomesServices: IncomesService,
              private route: ActivatedRoute, private router: Router) {
    this.outlay = {} as OutlayModel;
    this.outlay.associated = {} as AssociatedModel;
    this.associated = [];
    this.deductibles = [];
    this.incomes = [];
    this.outlays = [];
  }

  ngOnInit() {
    this.loadAssociated();
    this.loadDeductibles();
  }

  loadAssociated() {
    this.associatedService.get().subscribe(
      (associated) => { this.associated = associated; },
      (err) => { console.log(err); }
    );
  }

  loadDeductibles() {
    this.deductiblesService.get().subscribe(
      (deductibles) => {
        this.deductibles = deductibles;
        this.deductibles.forEach((deductible) => {
          deductible.selected = true;
          if (deductible.name === 'Pendiente') {
            deductible.amount = this.outlay.associated.due || 0;
            deductible.details = `usted debe ${deductible.amount || 0}`;
            if (deductible.amount === 0) { deductible.selected = false; }
          }
        });
        if (this.outlay.associatedId && this.outlay.date &&
          this.outlay.associatedId !== '' && this.outlay.date !== '' ) {
          this.loadOutlays();
        }
      },
      (err) => { console.log(err); }
    );
  }

  loadIncomes() {
    if (this.outlay.associatedId && this.outlay.associatedId !== '') {
      this.outlay.associated = this.associated.find(person => person._id === this.outlay.associatedId);
      this.incomesServices.get({associatedId: this.outlay.associatedId, payed: null}).subscribe(
        (incomes) => {
          this.incomes = incomes;
          this.calculate();
        },
        (err) => { console.log(err); }
      );
    }
  }

  loadOutlays() {
    const date = new Date(this.outlay.date);
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const expr = {$and: [{$eq: [{$month: '$date'}, month]}, {$eq: [{$year: '$date'}, year]}]};
    this.outlaysService.get({associatedId: this.outlay.associatedId, $expr: expr }).subscribe(
      (outlays) => {
        this.deductibles.filter(deductible => !deductible.required && deductible.name !== 'Pendiente').forEach(deductible => {
          let amount = 0;
          outlays.forEach(o => {
            o.deductibles.forEach(d => {
              if (d._id === deductible._id) { amount += d.amount; }
            });
          });
          deductible.details = `ha pagado ${amount}`;
          deductible.amount -= amount;
        });
        this.outlays = outlays;
        this.calculate();
      },
      (err) => { console.log(err); }
    );
  }

  toggleCheck(deductible: DeductibleModel) {
    deductible.selected = !deductible.selected;
    this.calculate();
  }

  calculate() {
    console.log('recalculating!', this.outlay);

    this.outlay.totalIncomes = 0;
    if (this.incomes.length > 0) {
      this.incomes.forEach((income) => {
        this.outlay.totalIncomes += income.amount;
      });
    }

    this.outlay.totalDeductibles = 0;
    this.deductibles.filter(deductible => deductible.selected).forEach(deductible => {
      if (deductible.type === 'percent') {
        const amount = this.outlay.totalIncomes * (deductible.amount / 100);
        deductible.details = `es igual a ${amount}`;
        this.outlay.totalDeductibles += amount;
      } else {
        this.outlay.totalDeductibles += deductible.amount;
      }
    });

    this.outlay.amount = this.outlay.totalIncomes - this.outlay.totalDeductibles;
  }

  save() {
    if (this.outlay.associatedId && this.outlay.date &&
      this.outlay.associatedId !== '' && this.outlay.date !== '' ) {
      this.outlay.deductibles = this.deductibles.filter(deductible => deductible.selected).map<DeductibleItem>(deductible => {
        if (deductible.name === 'Pendiente' && deductible.amount > 0) { this.outlay.associated.due -= deductible.amount; }
        return {_id: deductible._id, name: deductible.name, amount: deductible.amount, type: deductible.type} as DeductibleItem;
      });
      this.outlaysService.create(this.outlay).subscribe(
        () => {
          if (this.outlay.amount < 0) { this.outlay.associated.due += this.outlay.amount * -1; }
          this.associatedService.update(this.outlay.associated).subscribe(
            () => { this.router.navigate(['/outlay/list']); },
            (err) => { console.log(err); }
          );
        },
        (err) => { console.log(err); }
      );
    }
  }

}

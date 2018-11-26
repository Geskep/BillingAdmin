import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeductibleModel} from '../../../models/Deducible';
import {DeductiblesService} from '../../../services/deductibles';

@Component({
  selector: 'app-deducible-form',
  templateUrl: './deductible-form.component.html'
})
export class DeductibleFormComponent implements OnInit {

  deductible: DeductibleModel;
  symbol = '$';
  updating: boolean;

  constructor(private deductibleService: DeductiblesService, private route: ActivatedRoute, private router: Router) {
    this.deductible = {} as DeductibleModel;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (this.updating = !!params['id']) {
        this.loadDeductibles(params['id']);
      }
    });
  }

  loadDeductibles(id: string) {
    this.deductibleService.find(id).subscribe(
      (deductible) => {
        this.deductible = deductible;
        if (this.deductible.type === 'percent') { this.symbol = '%'; }
      },
      (err) => { console.log(err); }
    );
  }

  save() {
    this.deductible.type = (this.symbol === '$') ? 'quantity' : 'percent';
    this.deductibleService[this.updating ? 'update' : 'create'](this.deductible).subscribe(
      () => { this.router.navigate(['/deductible/list']); },
      () => {}
    );
  }

}

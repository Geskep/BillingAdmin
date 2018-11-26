import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AssociatedModel} from '../../../models/Associated';
import {AssociatedService} from '../../../services/associated';

@Component({
  selector: 'app-associated-form',
  templateUrl: './associated-form.component.html'
})
export class AssociatedFormComponent implements OnInit {

  associated: AssociatedModel;
  updating: boolean;

  constructor(private associatedService: AssociatedService, private route: ActivatedRoute, private router: Router) {
    this.associated = {} as AssociatedModel;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (this.updating = !!params['id']) {
        this.loadAssociated(params['id']);
      }
    });
  }

  loadAssociated(id: string) {
    this.associatedService.find(id).subscribe(
      (associated) => { this.associated = associated; },
      (err) => { console.log(err); }
    );
  }

  save() {
    this.associatedService[this.updating ? 'update' : 'create'](this.associated).subscribe(
      () => { this.router.navigate(['/associated/list']); },
      () => {}
    );
  }

}

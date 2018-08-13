import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Load } from '../store/northbound.actions';
import resource from '../northbound.resource.json';
import { getData } from '../store/northbound.selectors';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'tp-northbound',
  templateUrl: 'northbound.component.html'
})
export class TpNorthboundComponent implements OnInit {
  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  model: any;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select(getData)).subscribe(model => {
      this.model = {...model};
    });
    this.fields = resource.fields;
    this.store.dispatch(new Load());
  }

  submit(model) {
  }
}

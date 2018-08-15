import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Load, Update } from '../store/custom.actions';
import { getData } from '../store/custom.selectors';
import { TpCustomService } from '../custom.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'tp-custom',
  templateUrl: 'custom.component.html'
})
export class TpCustomComponent implements OnInit {
  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  model: any;

  constructor(private store: Store<any>, private service: TpCustomService) {}

  ngOnInit() {
    this.store.pipe(select(getData)).subscribe(model => {
      this.model = {...model};
    });
    this.store.dispatch(new Load());
    this.service.loadResource().pipe(take(1)).subscribe(resource => this.fields = resource.fields);
  }

  submit(model) {
    this.store.dispatch(new Update(model));
  }
}

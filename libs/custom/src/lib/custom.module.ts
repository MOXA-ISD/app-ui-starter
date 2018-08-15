import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';
import { reducer } from './store/custom.reducer';
import { TpCustomEffects } from './store/custom.effects';
import { TpWindowModule } from '@tp-ui/tp-window';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { TpCustomComponent } from './components/custom.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TpWindowModule,
    MatButtonModule,
    FormlyMaterialModule,
    FormlyModule.forChild(),
    StoreModule.forFeature('custom', reducer),
    EffectsModule.forFeature([TpCustomEffects]),
    RouterModule.forChild([
      {path: '', component: TpCustomComponent}
    ])
  ],
  exports: [ RouterModule ],
  declarations: [ TpCustomComponent ]
})
export class TpCustomModule {}

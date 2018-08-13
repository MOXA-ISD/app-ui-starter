import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';
import { reducer } from './store/northbound.reducer';
import { TpNorthboundEffects } from './store/northbound.effects';
import { TpWindowModule } from '@tp-ui/tp-window';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { TpNorthboundComponent } from './components/northbound.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TpWindowModule,
    MatButtonModule,
    FormlyMaterialModule,
    FormlyModule.forChild(),
    StoreModule.forFeature('northbound', reducer),
    EffectsModule.forFeature([TpNorthboundEffects]),
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: TpNorthboundComponent}
    ])
  ],
  declarations: [TpNorthboundComponent]
})
export class TpNorthboundModule {}

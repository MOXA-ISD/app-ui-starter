import { Injectable } from '@angular/core';
import { TpCustomService } from '../custom.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { LoggerService } from '@tp-ui/tp-core';
import {
  Load,
  LoadSuccess,
  LoadFailed,
  Update,
  UpdateSuccess,
  UpdateFailed,
  TpCustomActionTypes } from './custom.actions';

@Injectable()
export class TpCustomEffects {
  @Effect()
  load$: Observable<Action> = this.action$.pipe(
    ofType<Load>(TpCustomActionTypes.Load),
    switchMap(() =>
      this.service.load().pipe(
        map(data => new LoadSuccess(data)),
        catchError(error => of(new LoadFailed(error)))
      )
    )
  );

  @Effect()
  update$: Observable<Action> = this.action$.pipe(
    ofType<Update>(TpCustomActionTypes.Update),
    switchMap(action =>
      this.service.update(action.payload).pipe(
        map(data => {
          this.logger.success('Data was updated.');
          return new UpdateSuccess(data);
        }),
        catchError(error => {
          this.logger.error('Data update failed');
          return of(new UpdateFailed(error));
        })
      )
    )
  );

  constructor(
    private logger: LoggerService,
    private action$: Actions,
    private service: TpCustomService,
  ) {}
}

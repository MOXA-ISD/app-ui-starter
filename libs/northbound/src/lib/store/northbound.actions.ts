import { Action } from '@ngrx/store';

export enum TpNorthboundActionTypes {
  Load = '[TpNorthboundAction] Load',
  LoadSuccess = '[TpNorthboundAction] LoadSuccess',
  LoadFailed = '[TpNorthboundAction] LoadFailed',
  Update = '[TpNorthboundAction] Update',
  UpdateSuccess = '[TpNorthboundAction] UpdateSuccess',
  UpdateFailed = '[TpNorthboundAction] UpdateFailed'
}

export class Load implements Action {
  readonly type = TpNorthboundActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = TpNorthboundActionTypes.LoadSuccess;

  constructor(public payload: any) { }
}

export class LoadFailed implements Action {
  readonly type = TpNorthboundActionTypes.LoadFailed;

  constructor(public payload: any) { }
}

export class Update implements Action {
  readonly type = TpNorthboundActionTypes.Update;

  constructor(public payload: any) { }
}

export class UpdateSuccess implements Action {
  readonly type = TpNorthboundActionTypes.UpdateSuccess;

  constructor(public payload: any) { }
}

export class UpdateFailed implements Action {
  readonly type = TpNorthboundActionTypes.UpdateFailed;

  constructor(public payload: any) { }
}

export type TpNorthboundActions
            = Load
            | LoadSuccess
            | LoadFailed
            | Update
            | UpdateSuccess
            | UpdateFailed;

import { Action } from '@ngrx/store';

export enum TpCustomActionTypes {
  Load = '[TpCustomAction] Load',
  LoadSuccess = '[TpCustomAction] LoadSuccess',
  LoadFailed = '[TpCustomAction] LoadFailed',
  Update = '[TpCustomAction] Update',
  UpdateSuccess = '[TpCustomAction] UpdateSuccess',
  UpdateFailed = '[TpCustomAction] UpdateFailed'
}

export class Load implements Action {
  readonly type = TpCustomActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = TpCustomActionTypes.LoadSuccess;

  constructor(public payload: any) { }
}

export class LoadFailed implements Action {
  readonly type = TpCustomActionTypes.LoadFailed;

  constructor(public payload: any) { }
}

export class Update implements Action {
  readonly type = TpCustomActionTypes.Update;

  constructor(public payload: any) { }
}

export class UpdateSuccess implements Action {
  readonly type = TpCustomActionTypes.UpdateSuccess;

  constructor(public payload: any) { }
}

export class UpdateFailed implements Action {
  readonly type = TpCustomActionTypes.UpdateFailed;

  constructor(public payload: any) { }
}

export type TpCustomActions
            = Load
            | LoadSuccess
            | LoadFailed
            | Update
            | UpdateSuccess
            | UpdateFailed;

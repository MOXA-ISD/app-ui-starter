import { TpCustomActions, TpCustomActionTypes } from './custom.actions';

export interface CustomState {
  data: any;
  loaded: boolean;
  loading: boolean;
}

const initialState: CustomState = {
  data: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: TpCustomActions): CustomState {
  switch (action.type) {
    case TpCustomActionTypes.Load: {
      return {
        ...state,
        loading: true
      };
    }

    case TpCustomActionTypes.LoadFailed: {
      return {
        ...state,
        loading: false
      };
    }

    case TpCustomActionTypes.LoadSuccess: {
      return {
        ...state,
        data: action.payload,
        loaded: true,
        loading: false
      };
    }

    case TpCustomActionTypes.UpdateSuccess: {
      return {
        ...state,
        data: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

import { TpNorthboundActions, TpNorthboundActionTypes } from './northbound.actions';

export interface NorthboundState {
  data: any;
  loaded: boolean;
  loading: boolean;
}

const initialState: NorthboundState = {
  data: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: TpNorthboundActions): NorthboundState {
  switch (action.type) {
    case TpNorthboundActionTypes.Load: {
      return {
        ...state,
        loading: true
      };
    }

    case TpNorthboundActionTypes.LoadFailed: {
      return {
        ...state,
        loading: false
      };
    }

    case TpNorthboundActionTypes.LoadSuccess: {
      return {
        ...state,
        data: action.payload,
        loaded: true,
        loading: false
      };
    }

    case TpNorthboundActionTypes.UpdateSuccess: {
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

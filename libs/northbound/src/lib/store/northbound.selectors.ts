import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { NorthboundState } from './northbound.reducer';

export const getState: MemoizedSelector<object, NorthboundState> = createFeatureSelector<NorthboundState>('northbound');

export const getData = createSelector(
  getState,
  (state: NorthboundState) => state.data
);

export const getLoading = createSelector(
  getState,
  (state: NorthboundState) => state.loading
);

export const getLoaded = createSelector(
  getState,
  (state: NorthboundState) => state.loaded
);




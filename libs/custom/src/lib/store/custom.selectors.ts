import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { CustomState } from './custom.reducer';

export const getState: MemoizedSelector<object, CustomState> = createFeatureSelector<CustomState>('custom');

export const getData = createSelector(
  getState,
  (state: CustomState) => state.data
);

export const getLoading = createSelector(
  getState,
  (state: CustomState) => state.loading
);

export const getLoaded = createSelector(
  getState,
  (state: CustomState) => state.loaded
);




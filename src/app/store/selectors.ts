import { UtilitiesState } from "./initialState";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const featureKey = 'state';

const selectFeature = createFeatureSelector<UtilitiesState>(featureKey)

export const selectFeatureUser = createSelector(
  selectFeature,
  (state: UtilitiesState) => state.user)

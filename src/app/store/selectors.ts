import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UtilitiesState } from "../models/store.model";

const featureKey = 'state';

const selectFeature = createFeatureSelector<UtilitiesState>(featureKey)

export const selectFeatureUser = createSelector(
  selectFeature,
  (state: UtilitiesState) => state.user)

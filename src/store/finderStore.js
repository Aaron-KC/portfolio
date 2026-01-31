import { create } from "zustand";
import { locations } from "../constants";

const DEFAULT_LOCATION = locations.work;

export const useFinderStore = create((set) => ({
  currentLocation: DEFAULT_LOCATION,

  changeLocation: value =>
    set((state) => ({
      ...state,
      currentLocation: value,
    })),

  resetLocation: () =>
    set((state) => ({
      ...state,
      currentLocation: DEFAULT_LOCATION,
    })),
}));

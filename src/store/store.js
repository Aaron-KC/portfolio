import { create } from "zustand";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants";

export const useWindowStore = create((set) => ({
  windows: WINDOW_CONFIG,
  nextZIndex: INITIAL_Z_INDEX + 1,

  openWindow: (id, data = null) =>
    set((state) => ({
      nextZIndex: state.nextZIndex + 1,
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isOpen: true,
          zIndex: state.nextZIndex,
          hasMounted: true,
          data: data ?? state.windows[id].data,
        },
      },
    })),

  closeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isOpen: false,
          zIndex: INITIAL_Z_INDEX,
          data: null,
        },
      },
    })),

  focusWindow: (id) =>
    set((state) => ({
      nextZIndex: state.nextZIndex + 1,
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          zIndex: state.nextZIndex,
        },
      },
    })),
}));

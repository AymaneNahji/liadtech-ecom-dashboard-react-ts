import { create } from 'zustand'

type State = {
    isOpen:boolean
}

type Actions = {
    open:()=>void;
    close:()=>void;
}

/**
 * A Zustand store for managing the drawer opening state.
 */
export const useDrawerStore = create<State & Actions>((set) => ({
  /**
   * Whether the drawer is open
   * @type {boolean}
   */
  isOpen: true,
  /**
   * Open the drawer
   * @returns {void}
   */
  open: () => set({ isOpen:true }),
  /**
   * Close the drawer
   * @returns {void}
   */
  close: () => set({ isOpen:false }),
}))


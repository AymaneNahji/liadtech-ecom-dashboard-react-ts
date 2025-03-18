import { create } from 'zustand'

type State = {
  isDark: boolean
}

type Actions = {
  activeDarkMode: () => void;
  deactiveDarkMode: () => void;
  toggleTheme: () => void;
}


/**
 * A Zustand store for managing theme state (dark/light mode).
 */

export const useThemeStore = create<State & Actions>((set,get) => ({
  /**
   * Whether the dark mode is currently active.
   * @type {boolean}
   */
  isDark: localStorage.getItem('theme') == 'dark',
  
  activeDarkMode: () => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    set({ isDark: true })
  },

  /**
   * Deactivates dark mode by:
   * 1. Remove the `.dark` class from the document's root element.
   * 2. Setting the `theme` key in `localStorage` to `'light'`.
   * 3. Updating the `isDark` state to `false`.
   * @returns {void}
   */
  deactiveDarkMode: () => {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    set({ isDark: false })
  },

  /**
   * Toggle between `deactiveDarkMode` and `activeDarkMode` depand as `isDark`
   * @returns {void}
   */
  toggleTheme:()=>{
    const self = get()
    if(self.isDark){
      self.deactiveDarkMode()
    }else{
      self.activeDarkMode()
    }
  }

}))


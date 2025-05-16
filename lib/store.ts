import { create } from "zustand"

type AppState = {
  isDropdownOpen: boolean
  setDropdownOpen: (isOpen: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  isDropdownOpen: false,
  setDropdownOpen: (isOpen) => set({ isDropdownOpen: isOpen }),
}))

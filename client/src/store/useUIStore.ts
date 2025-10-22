import { create } from "zustand";

interface UIState {
  isSidebarOpen: boolean;
  isAddTaskModalOpen: boolean;
  isAddTeamModalOpen: boolean;
  isSearchModalOpen: boolean;

  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;

  openAddTaskModal: () => void;
  closeAddTaskModal: () => void;

  openAddTeamModal: () => void;
  closeAddTeamModal: () => void;

  openSearchModal: () => void;
  closeSearchModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: true,
  isAddTaskModalOpen: false,
  isAddTeamModalOpen: false,
  isSearchModalOpen: false,

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),

  openAddTaskModal: () => set({ isAddTaskModalOpen: true }),
  closeAddTaskModal: () => set({ isAddTaskModalOpen: false }),

  openAddTeamModal: () => set({ isAddTeamModalOpen: true }),
  closeAddTeamModal: () => set({ isAddTeamModalOpen: false }),

  openSearchModal: () => set({ isSearchModalOpen: true }),
  closeSearchModal: () => set({ isSearchModalOpen: false }),
}));

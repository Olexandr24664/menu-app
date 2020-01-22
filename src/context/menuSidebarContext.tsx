import React from "react";

const initialState = { active: false };

const ActiveSidebarContext = React.createContext({ active: false });
const ToggleSidebarContext = React.createContext((props?: any): any => {});

function toggleSidebar(state: any, action: any) {
  return { active: !state.active };
}

const SidebarProvider: React.FC = ({ children }) => {
  const [active, toggleActive] = React.useReducer(toggleSidebar, initialState);
  return (
    <ActiveSidebarContext.Provider value={active}>
      <ToggleSidebarContext.Provider value={toggleActive}>
        {children}
      </ToggleSidebarContext.Provider>
    </ActiveSidebarContext.Provider>
  );
};

function useActiveSidebarState() {
  const context = React.useContext(ActiveSidebarContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return context;
}

function useToggleSidebarDispatch() {
  const context = React.useContext(ToggleSidebarContext);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider");
  }
  return context;
}

export { SidebarProvider, useActiveSidebarState, useToggleSidebarDispatch };

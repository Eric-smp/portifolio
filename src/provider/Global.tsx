import { useEffect, useMemo, useState, useContext, createContext } from "react";
import { TGlobalProvider, ChildrenProvider } from "@/type";

export const initState: TGlobalProvider = {
  visibleModal: false,
  setVisibleModal: () => {},
};

const GlobalContext = createContext<TGlobalProvider>(initState);

function GlobalProvider({ children }: ChildrenProvider) {
  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {}, []);

  const value = useMemo(
    () => ({
      visibleModal,
      setVisibleModal,
    }),
    [visibleModal]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };

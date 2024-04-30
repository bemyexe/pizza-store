import { Outlet } from "react-router-dom";
import Header from "../../components/header";

import "./style.scss";
import { createContext, useState } from "react";

export type GlobalContent = {
  state: string;
  setState: (c: string) => void;
};

export const SomeContext = createContext<GlobalContent>({
  state: "",
  setState: () => {},
});

const RootPage = () => {
  const [state, setState] = useState("");
  return (
    <SomeContext.Provider value={{ state, setState }}>
      <div className="background-app">
        <div className="main-app">
          <Header />
          <Outlet />
        </div>
      </div>
    </SomeContext.Provider>
  );
};

export default RootPage;

import { FC, useContext } from "react";
import "./style.scss";
import { SomeContext } from "../../../pages/root-page";

const Input: FC = () => {
  const { state, setState } = useContext(SomeContext);

  return (
    <>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="what pizza?"
        className="input"
      />
    </>
  );
};

export default Input;

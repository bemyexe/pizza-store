import { FC, useContext, useRef } from "react";
import "./style.scss";
import { SomeContext } from "../../../pages/root-page";

const Input: FC = () => {
  const { state, setState } = useContext(SomeContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearInput = () => {
    setState("");
    inputRef.current?.focus();
  };

  return (
    <div className="search">
      <input
        ref={inputRef}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="what pizza?"
        className="input"
      />
      {state && (
        <img
          onClick={() => handleClearInput()}
          className="close"
          src="assets/close.svg"
        />
      )}
    </div>
  );
};

export default Input;

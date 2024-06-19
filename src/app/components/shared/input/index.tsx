import { ChangeEvent, FC, useRef, useState } from "react";
import "./style.scss";

const Input: FC = () => {
  const [state, setState] = useState("");
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
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setState(e.target.value)
        }
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

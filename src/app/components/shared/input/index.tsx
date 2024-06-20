import { ChangeEvent, FC, useRef } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { filterSelectors } from "../../../../store/filter/filter.selectors";
import { useAppDispatch } from "../../../../store";
import { setSearchValue } from "../../../../store/filter/filter.slice";

const Input: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const state = useSelector(filterSelectors.searchValue);
  const dispatch = useAppDispatch();

  // const debounce = (callback, delay: number) => {
  //   let timeoutId;
  //   return (...args) => {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => {
  //       (timeoutId = null), callback(...args);
  //     }, delay);
  //   };
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchValue(value));
  };

  const handleClearInput = () => {
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
  };

  return (
    <div className="search">
      <input
        ref={inputRef}
        value={state}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
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

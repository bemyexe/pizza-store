import { ChangeEvent, FC, useCallback, useRef, useState } from 'react';
import './style.scss';
import { useAppDispatch } from '../../../../store';
import { setSearchValue } from '../../../../store/filter/filter.slice';
import { debounce } from '../../../../helpers/debounce';

const Input: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>('');

  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const handleClearInput = () => {
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <div className="search">
      <input
        ref={inputRef}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        placeholder="what pizza?"
        className="input"
      />
      {value && (
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

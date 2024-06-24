import React, { useState } from 'react';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { ITeam } from '../interfaces/teams';
import CancelIcon from '@mui/icons-material/Cancel';

interface CustomAutocompleteProps {
  data: ITeam[];
  onChange: (value: ITeam | null) => void;
  className?: string;
}

const CustomAutocomplete = (props: CustomAutocompleteProps) => {
  const [inputValue, setInputValue] = useState('');

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'combo-box-demo',
    options: props.data,
    getOptionLabel: (option: ITeam) => option.strTeam,
    onChange: (_, value) => props.onChange(value),
    inputValue,
    onInputChange: (_, newInputValue) => setInputValue(newInputValue),
  });

  const clearInput = () => {
    setInputValue('');
    props.onChange(null);
  };

  const inputProps = getInputProps();

  return (
    <div
      {...getRootProps()}
      className={`w-[500px] relative ${props.className}`}
    >
      <div className='relative'>
        <input
          {...inputProps}
          value={inputValue}
          onChange={e => {
            if (inputProps.onChange) {
              inputProps.onChange(e);
            }
            setInputValue(e.target.value);
          }}
          placeholder='Choose a Team'
          className='w-full h-12 pl-5 pr-10 rounded-full border-none outline-none bg-gray-100 text-black text-base'
        />
        {inputValue && (
          <button
            onClick={clearInput}
            type='button'
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
          >
            <CancelIcon fontSize='small' />
          </button>
        )}
      </div>
      {groupedOptions.length > 0 ? (
        <ul
          {...getListboxProps()}
          className='w-full mt-2 p-4 absolute z-10 list-none bg-gray-100 overflow-auto max-h-64 rounded-3xl shadow-lg'
        >
          {(groupedOptions as ITeam[]).map((option, index) => (
            <li
              {...getOptionProps({ option, index })}
              key={option.strTeam}
              className='py-1 px-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-all duration-150'
            >
              {option.strTeam}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default CustomAutocomplete;

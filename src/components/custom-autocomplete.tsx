import React from 'react';
import {
  useAutocomplete,
  UseAutocompleteProps,
} from '@mui/base/useAutocomplete';

export interface AutocompleteOption {
  label: string;
  [key: string]: any;
}

interface CustomAutocompleteProps<T extends AutocompleteOption> {
  options: T[];
  onChange: (value: T | T[] | null) => void;
  className?: string;
  label?: string;
  multiple?: boolean;
}

const CustomAutocomplete = <T extends AutocompleteOption>({
  options,
  onChange,
  className = '',
  label = 'Select an option',
  multiple = false,
}: CustomAutocompleteProps<T>) => {
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
  } = useAutocomplete({
    options,
    onChange: (_, value) => {
      if (Array.isArray(value)) {
        onChange(value as T[]);
      } else if (value !== null && typeof value === 'object') {
        onChange(value as T);
      } else {
        onChange(null);
      }
    },
    multiple,
  } as UseAutocompleteProps<T, boolean, boolean, boolean>);

  return (
    <div className={className}>
      <div {...getRootProps()} className='h-full w-full relative'>
        <div className='h-full w-full flex flex-wrap gap-1 px-4'>
          {multiple &&
            (value as T[]).map((option: T, index: number) => (
              <Tag label={option.label} {...getTagProps({ index })} />
            ))}
          <input
            {...getInputProps()}
            className='h-full w-full flex-grow bg-transparent focus:outline-none z-20'
          />
        </div>
        <label
          className={`absolute left-4 text-gray-500 transition-all duration-150 ${
            focused || value ? '-top-2 text-xs' : 'top-4'
          }`}
        >
          {label}
        </label>
      </div>

      {groupedOptions.length > 0 ? (
        <ul
          {...getListboxProps()}
          className='mt-2 bg-gray-100 rounded-3xl shadow-lg p-2 max-h-60 overflow-auto'
        >
          {(groupedOptions as T[]).map((option, index) => (
            <li
              {...getOptionProps({ option, index })}
              key={option.label}
              className='px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-lg transition-all duration-150'
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div
      {...other}
      className='bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-sm flex items-center'
    >
      {label}
      <button
        type='button'
        onClick={onDelete}
        className='ml-1 text-blue-600 hover:text-blue-800'
      >
        ✕
      </button>
    </div>
  );
}

export default CustomAutocomplete;

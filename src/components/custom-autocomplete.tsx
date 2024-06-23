import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Paper } from '@mui/material';
import { ITeam } from '../interfaces/teams';

interface CustomAutocompleteProps {
  data: ITeam[];
  onChange: (value: ITeam | null) => void;
  className?: string;
}

const CustomAutocomplete = (props: CustomAutocompleteProps) => {
  return (
    <Autocomplete
      {...props}
      id='combo-box-demo'
      options={props.data}
      getOptionLabel={(option: ITeam) => option.strTeam}
      className={`bg-gray-100 w-[500px] h-fit rounded-full ${props.className}`}
      onChange={(_, value) => props.onChange(value)}
      renderInput={params => (
        <TextField
          {...params}
          label='Choose a Team'
          InputLabelProps={{ style: { color: '#64748b' } }}
        />
      )}
      PaperComponent={props => (
        <Paper
          {...props}
          style={{
            background: '#f3f4f6',
            marginTop: '10px',
            borderRadius: '40px',
            padding: '15px 25px',
            boxShadow: 'none',
          }}
        />
      )}
    />
  );
};

export default CustomAutocomplete;

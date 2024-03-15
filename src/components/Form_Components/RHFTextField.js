import React from 'react';
import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

const RHFTextField = React.forwardRef(({ name, ...other }, ref) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
        {...field}
        fullWidth
        value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
        error={!!error}
        helperText={error?.message}
        ref={ref} // Agrega la referencia (ref) al TextField
        {...other}
        />
      )}
    />
  );
});

RHFTextField.propTypes = {
  name: PropTypes.string,
};

export default RHFTextField;
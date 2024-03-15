'use client';
import React, { useState } from 'react';
import styles from './LoginBox.module.css';
import { Grid, InputAdornment, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';

// Form components
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import FormProvider from '../Form_Components/FormProvider';
import RHFTextField from '../Form_Components/RHFTextField';

//Hooks
import useMutateAccount from './hooks/useMutationAccount';

YupPassword(yup);
const LoginBox = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const mutations = useMutateAccount();

  //yup
  const Schema = yup.object().shape({
    email: yup.string().required('Este campo debe estar lleno'),
    pass: yup.string().required('Este campo debe estar lleno'),
    pass_confirm: yup
      .string()
      .required('Este campo debe estar lleno')
      .oneOf([yup.ref('pass'), null], 'Contraseña deben Coincidir'),
    name: yup.string().required('Este campo debe estar lleno'),
    last_name: yup.string().required('Este campo debe estar lleno'),
  });

  // react-hook-form
  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      email: '',
      pass: '',
      pass_confirm: '',
      name: '',
      last_name: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = methods;

  const onSubmit = async (formData) => {
    const dataToSend = {
      email: formData.email,
      password: formData.pass,
      nombre: formData.name,
      primer_apellido: formData.last_name
  };
    console.log('Datos del registro:', dataToSend);

    await mutations.User.create.mutateAsync(dataToSend)
    reset();
  };

  const buttonStyle = {
    fontSize: '1rem',
    backgroundColor: 'var(--primary-red)',
    color: 'white',
    width: '100%',
    borderRadius: '15px',
    '&: hover': {
      backgroundColor: 'var(--secondary-red)',
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p className={styles.title_cute}>Pokedex </p>
      </div>

      <div className={styles.container_form}>
        <p className={styles.title}> Registro del entrenador</p>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formInputs}>
            <Grid container spacing={1}>
              <Grid item md={6}>
                <RHFTextField name="name" label="Nombre" />
              </Grid>
              <Grid item md={6}>
                <RHFTextField name="last_name" label="Apellido" />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <RHFTextField name="email" label="Correo" />

                <RHFTextField
                  name="pass"
                  type={showOldPassword ? "text" : "password"}
                  label="Contraseña"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowOldPassword(!showOldPassword)} edge="end">
                          <Icon icon={showOldPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <RHFTextField
                  name="pass_confirm"
                  type={showNewPassword ? "text" : "password"}
                  label="Confirmar contraseña"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowNewPassword(!showNewPassword)} edge="end">
                          <Icon icon={showNewPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <LoadingButton type="submit" variant="contained" loading={isSubmitting} sx={buttonStyle}>
              Enviar
            </LoadingButton>
          </div>
        </FormProvider>
      </div>
      <img src={'/general_media/poke_bici.gif'} alt="gif" className={styles.image_gif} />
    </div>
  );
};

export default LoginBox;

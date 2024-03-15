import React from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import api from '../../../utils/api';

const queryKey = ['account'];

// Get items
const useMutateAccount = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar(); // Obtener la función enqueueSnackbar de notistack

  const createAccount = (data) => (
    api.usuarios.usuarios.createUsuario(data)
      .then((response) => { 
        if (response.status === 200) {
          enqueueSnackbar('Usuario creado exitosamente', { variant: 'success' });
        }
        return response.data
      })
      .catch((error) => {
        enqueueSnackbar('Hubó un error al crear usuario', { variant: 'error' });
        throw error;
      })
  );
  // mutates
  const mutateCreateAccount = useMutation(createAccount, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey); // Invalidar Query y hacer refresh
    },
  });

  return {
    User: {
      create: mutateCreateAccount,
    },
  };

};

export default useMutateAccount;
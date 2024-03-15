import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';
import api from '../../../utils/api';

const queryKey = ['departamentos'];

// Get items
const useTest = (filter) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar(); // Obtener la función enqueueSnackbar de notistack

  const getCotizacionesList = (filter) => (
    new Promise((resolve, reject) => {
      api.cotizador.getDepartamentos(filter) // Colocar la ruta correcta cuando se tenga 
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          // Mostrar una alerta en caso de error
          enqueueSnackbar('Hubo un error al obtener los datos', { variant: 'error' });
          reject(error);
        });
    })
  );

  useEffect(() => {
    const fetchData = async () => {
      // useQueryClient.prefetchQuery se utiliza para almacenar en caché los datos de Operaciones
      await queryClient.prefetchQuery(queryKey, () => getCotizacionesList(filter));
    };

    fetchData();
  }, [filter, queryClient]);

  return useQuery(queryKey, () => getCotizacionesList(filter), { refetchOnWindowFocus: 'always', refetchInterval: 30000 });
};

export default useTest;
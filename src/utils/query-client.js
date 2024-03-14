// import {  enqueueSnackbar } from 'notistack'
import { QueryClient } from '@tanstack/react-query'

// function queryErrorHandler (error) {
//   const title = error instanceof Error ? error.message : 'Error al conectar con servidor'

//   console.warn(title)

//   // enqueueSnackbar(title, {
//   //   variant: 'error',
//   //   persist: true,
//   //   preventDuplicate: true
//   // })
// }

const queryClient = new QueryClient()

// {
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 5,
//       refetchOnWindowFocus: false,
//       onError: queryErrorHandler
//     }
//   }
// }

export default queryClient

// Esta configuración define una instancia de QueryClient con opciones predeterminadas para la biblioteca React Query.

// Dentro del objeto defaultOptions, se establece la opción queries para definir cómo se deben tratar las solicitudes de consulta.

// staleTime: define el tiempo máximo que una respuesta de consulta puede estar en caché antes de que se considere "obsoleta" y se realice una nueva solicitud. En este caso, se establece en 5 segundos, lo que significa que una consulta que no se ha actualizado en los últimos 5 segundos se considerará "obsoleta" y se volverá a solicitar automáticamente.
// onError: define una función que se ejecutará cuando ocurra un error en una solicitud de consulta. En este caso, la función queryErrorHandler se ejecutará y registrará el error en la consola del navegador.
// Hay muchas otras opciones que se pueden agregar a defaultOptions para ajustar la forma en que React Query maneja las solicitudes de consulta, como:

// cacheTime: define el tiempo que una respuesta de consulta se mantendrá en caché después de que se actualice. Por defecto, esto se establece en Infinity, lo que significa que la respuesta se mantendrá en caché para siempre. Sin embargo, esto puede ser problemático si se cambian los datos con frecuencia, ya que se podrían mostrar datos obsoletos a los usuarios. En este caso, puede ser útil establecer un tiempo de caché limitado.
// retry: define el número máximo de veces que se volverá a intentar una solicitud de consulta si falla. Por defecto, esto se establece en 3, lo que significa que React Query intentará realizar la solicitud tres veces antes de mostrar un mensaje de error. Sin embargo, esto también se puede ajustar según sea necesario.
// También hay opciones disponibles para ajustar la forma en que React Query maneja las mutaciones, que son solicitudes para modificar los datos del servidor en lugar de simplemente recuperarlos.


// La línea que está comentada refetchOnWindowFocus: false es una opción de configuración para las solicitudes de consulta en React Query.

// Cuando esta opción se establece en true (que es el valor predeterminado), React Query volverá a realizar automáticamente las solicitudes de consulta cuando el usuario cambie el foco de su ventana (por ejemplo, al cambiar de pestaña o al regresar a la pestaña actual después de haber estado en otra pestaña).

// Esto puede ser útil para mantener los datos actualizados en tiempo real, pero también puede ser una fuente de problemas si las solicitudes de consulta son costosas en términos de recursos del servidor. Además, si las solicitudes de consulta tienen un tiempo de vencimiento (staleTime) relativamente corto, es posible que no se necesite volver a realizar la solicitud de consulta cuando el usuario cambie el foco de su ventana, ya que la caché de la solicitud aún podría estar dentro del tiempo de vencimiento.

// Al establecer refetchOnWindowFocus en false, se desactiva esta funcionalidad y las solicitudes de consulta solo se volverán a realizar automáticamente cuando expire su tiempo de vencimiento en la caché.

// En resumen, la opción refetchOnWindowFocus controla si React Query volverá a realizar automáticamente las solicitudes de consulta cuando el usuario cambie el foco de su ventana. Si se establece en true, se activará esta funcionalidad, y si se establece en false, se desactivará.
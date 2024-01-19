# Laboratorio Funciones

Pasos para abrir el proyecto:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## Ejercicio
Implementar una pantalla en la que aparezca un display con el turno actual de una clínica y un botón para pasar al siguiente turno, otro para volver al anterior y otro de reset que pone el turno a 0.

Además, añadir una caja de teto y un botón para cambiar el turno al valor que se quiera.

### Resolución

En el archivo .ts seleccionar los elementos del HTML que se quieren cambiar o que hagan alguna función con querySelector o getElementById.

Declarar las funciones necesarias. En este caso se declaran las siguientes funciones:

- turnoSiguiente(): para que capte el número del turno actual y se aumente en 1 unidad.

- turnoAnterior(): para que capte el número del turno actual y se reste 1 unidad.

- actualizarTurno(): para que se muestre el turno actual y en formato de dos cifras.

- resetTurno(): para reestablecer el número puesto por defecto en la constante.

Finalmente, se asocian a los botones esas funciones con el método addEventListener.

Para introducir el número que queramos, se añade un input y un botón en el HTML. En el archivo .ts seleccionamos los elementos, captamos el valor del input con .value, lo convertimos a number porque es de tipo string, y finalmente asignamos ese valor a la variable del turno actual.

El bus de eventos es una funcionalidad que nos permite **emitir un evento desde un elemento**
de la aplicación para **recibirlo en cualquier otro lugar y ejecutar una función**.

Se puede utilizar para tener comunicación entre componentes manteniéndolos **desacoplados**.

Además, al lanzar un evento podemos añadirle información que llegará a todos los observadores.

```js
export const EventBus = {
  emit: (event, data) =>
    document.dispatchEvent(new CustomEvent(event, { detail: data })),
  on: (event, callback) => {
    const myCallback = (e) => callback(e.detail);
    document.addEventListener(event, myCallback);
    const removeListener = () =>
      document.removeEventListener(event, myCallback);
    return removeListener;
  }
};

export default EventBus;
/* path example: /src/utils/eventBus.js */
```

<Note> 
  Los identificadores de los eventos deben ser unicos, una forma simple de manjearlos es
  declarándolos como constantes en el fichero "eventBus.js" y exportarlos cuando sea necesario.
</Note>

<SectionTitle>Utilización:</SectionTitle>

```js
import EventBus from "./path/to/eventBus.js";

// LAZAR un evento
EventBus.emit(event_id : string, data : any ) : boolean

// SUSCRIBIRSE a un evento
EventBus.on(event_id : string, callback : () => void) : () => void

// DESUSCRIBIRSE a evento
// Necesitamos guardar la función que obtenemos al suscribirnos
const removeListener = EventBus.on("event_id", callback);
//...
// Nos desuscribimos ejecutando la función
removeListener();
```

<SectionTitle>Ejemplo de uso:</SectionTitle>

<iframe src="https://codesandbox.io/embed/bus-de-eventos-ligero-en-react-js-znqx3i?codemirror=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Bus de eventos ligero en React JS"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

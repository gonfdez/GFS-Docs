El bus de eventos es una funcionalidad que nos permite **emitir un evento desde un elemento**
de la aplicación para **recibirlo en cualquier otro lugar y ejecutar una función**.

Se puede utilizar para tener comunicación entre componentes manteniéndolos **desacoplados**.

Además, al lanzar un evento podemos añadirle información que llegará a todos los observadores.

<CodeBlock id="solution" titleIDs={["Javascript","Typescript"]}>

```js
// ./src/utils/eventBus.js
export const EventBus = {
  emit: (event, customDetail) =>
    document.dispatchEvent(new CustomEvent(event, { detail: customDetail })),
  on: (event, callback) => {
    const myCallback = (e) => callback(e.detail);
    document.addEventListener(event, myCallback);
    const removeListener = () =>
      document.removeEventListener(event, myCallback);
    return removeListener;
  }
};

export default EventBus;
```

```typescript
// ./src/utils/eventBus.ts
export interface EventDetail<T = unknown> {
  error: boolean;
  data?: T;
}

export type RemoveListenerCallback = () => void;

export const EventBus = {
  emit: <T = unknown>(event: string, customDetail: EventDetail<T>) =>
    document.dispatchEvent(
      new CustomEvent<EventDetail>(event, { detail: customDetail })
    ),
  on: <T = unknown>(event: string, callback: (e: EventDetail<T>) => void) => {
    const myCallback = (e: Event) => callback((e as CustomEvent).detail);
    document.addEventListener(event, myCallback);
    const removeListener: RemoveListenerCallback = () =>
      document.removeEventListener(event, myCallback);
    return removeListener;
  }
};

export default EventBus;
```

</CodeBlock>

<Note> 
  Los **identificadores de los eventos** deben ser **unicos**, una forma simple de manjearlos es
  declarándolos como constantes en el fichero "eventBus.js" y exportarlos cuando sea necesario.
</Note>

<SectionTitle>Utilización:</SectionTitle>

<CodeBlock id="utilization" titleIDs={["ReactJS","Typescript"]}>

```js
import EventBus from "./path/to/eventBus";
import { useRef } from "react";

// # LAZAR un evento
EventBus.emit("event_id", { whatever : true });

// # SUSCRIBIRSE a un evento
EventBus.on("event_id", (customDetail) => console.log(customDetail.whatever));

// # DESUSCRIBIRSE de un evento
// Necesitamos guardar la referencia de la función que obtenemos al suscribirnos
const removeListener = useRef(undefined);

// Por normal general nos suscribimos a eventos al cargar el componente
useEffect(() => {
  // Guardo la referencia para poder desuscribirme cuando quiera
  removeListener.current = EventBus.on("event_id", callback);
}, []);

//...
// Nos desuscribimos ejecutando la función gruardada en la referencia
removeListener.current();

// # CALLBACK
const callback = (customDetail) => {
  // detail.error : boolean
  // detail.data : any
}
```

```ts
import EventBus, { EventDetail, RemoveListenerCallback } from "./path/to/eventBus";
import { useRef } from "react";

// # LAZAR un evento
EventBus.emit<string>("event_id", { error : false, data : 'Soy información del evento' });

// # SUSCRIBIRSE a un evento
EventBus.on<string>("event_id", (customDetail : EventDetail) => console.log(customDetail.data));

// # DESUSCRIBIRSE de un evento
// Necesitamos guardar la referencia de la función que obtenemos al suscribirnos
const removeListener = useRef<RemoveListenerCallback>();

// Por normal general nos suscribimos a eventos al cargar el componente
useEffect(() => {
  // Guardo la referencia para poder desuscribirme cuando quiera
  removeListener.current = EventBus.on<string>("event_id", callback);
}, []);

//...
// Nos desuscribimos ejecutando la función gruardada en la referencia
removeListener.current();

// # CALLBACK
const callback = (detail : EventDetail<string>) => {
  // detail.error : boolean
  // detail.data : string (En este caso)
}
```

</CodeBlock>

<Note> 
  El segundo parámetro ("customDetail") de EventBus.emit(...) puede ser de **cualquier tipo**. En typescript basta con **modificar** a nuestro antojo la interfaz **EventDetail**. Este parámetro será recibido por la función callback que pasemos al suscribirnos => EventBus.on( ..., callback(customDetail) ).
</Note>

<SectionTitle>Ejemplo de uso:</SectionTitle>

En el siguiente ejemplo podrás observar como se comunican dos componentes distintos a través del bus de eventos. 

Los componentes pueden estar en **cualquier lugar del proyecto** y aun así **poder comunicarse**. Esto nos permite hacer componentes **desacoplados** entre ellos y ahorrarnos, por ejemplo, el uso de un estado global o anidación de propiedades entre componentes.

<IframesContainer id="examples" titleIDs={["ReactJS","Typescript"]}>
<iframe src="https://codesandbox.io/embed/bus-de-eventos-ligero-en-react-js-znqx3i?codemirror=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Bus de eventos ligero en React JS"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<iframe src="https://codesandbox.io/embed/bus-de-eventos-ligero-con-react-typescript-jx2pd3?codemirror=1&expanddevtools=1&fontsize=14&module=%2Fsrc%2FApp.tsx&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Bus de eventos ligero con React Typescript"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</IframesContainer>
export interface EventDetail<T = unknown> {
  error: boolean;
  customDetail?: T;
}

export type removeListenerCallback = () => void;

export const EventBus = {
  emit: <T = unknown>(event: string, customDetail: EventDetail<T>) =>
    document.dispatchEvent(
      new CustomEvent<EventDetail>(event, { detail: customDetail })
    ),
  on: <T = unknown>(event: string, callback: (e: EventDetail<T>) => void) => {
    const myCallback = (e: Event) => callback((e as CustomEvent).detail);
    document.addEventListener(event, myCallback);
    const removeListener: removeListenerCallback = () =>
      document.removeEventListener(event, myCallback);
    return removeListener;
  }
};

export default EventBus;
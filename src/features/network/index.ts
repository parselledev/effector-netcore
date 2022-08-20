import { createEvent, createStore } from 'effector';
import { nanoid } from 'nanoid';

export const createNetworkState = () => {
  const $network = createStore<any>({
    state: 'offline',
  });
  const $requests = createStore<RequestType[]>([]);

  const request = createEvent<IRequest>();

  $requests.on(request, (state, requestData) => [
    ...state,
    { id: nanoid(), data: requestData },
  ]);

  return { $network, $requests, request };
};

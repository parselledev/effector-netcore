type HttpMethodType =
  | 'GET'
  | 'HEAD'
  | 'PUT'
  | 'POST'
  | 'DELETE'
  | 'PATCH'
  | 'OPTIONS';

interface IRequest {
  merhod?: HttpMethodType;
  url?: string;
  // data?: {};
  // config?: {};
  // responseType??: string;
}

type RequestType = {
  id?: string;
  url?: string;
  state?: 'pending' | 'done' | 'error' | null;
  startTime?: number;
  endTime?: number;
  workTime?: number;
  status?: number;
  statusText?: string;
  headers?: {};
  config?: {};
  request?: {};
};

// export const requestEntity: RequestType = {
//   id: nanoid(),
//   url: '',
//   state: null,
//   startTime: 0,
//   endTime: 0,
//   workTime: 0,
//   status: 0,
//   statusText: '',
//   headers: {},
//   config: {},
//   request: {},
// };

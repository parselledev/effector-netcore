type ApiType = {
  baseUrl: string;
  endpoints: EndpointsType;
  headers?: any;
};

type EndpointType = {
  query: string;
  payload: (args: any) => {};
};

type EndpointsType = {
  [name: string]: EndpointType;
};

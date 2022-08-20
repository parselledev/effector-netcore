export declare const createNetworkState: () => {
    $network: import("effector").Store<any>;
    $requests: import("effector").Store<RequestType[]>;
    request: import("effector").Event<IRequest>;
};

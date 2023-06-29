export type childRoutes = {
    name: string;
    interName: string;
    path: string;
};

export type routeProperties = {
    name: string;
    interName: string;
    path: string;
    children: childRoutes[][];
};

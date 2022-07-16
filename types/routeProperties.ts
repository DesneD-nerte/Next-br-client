type childRoutes = {
    name: string;
    path: string;
}

export type routeProperties = {
    name: string;
    path: string;
    children: childRoutes[];
};
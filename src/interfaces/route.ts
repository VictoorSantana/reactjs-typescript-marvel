export default interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    private: boolean,
    props?: any;
}
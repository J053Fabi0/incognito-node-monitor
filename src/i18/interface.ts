export interface ILanguage {
    [key: string]: any;
    app: IApp;
    nodeMonitor: INodeMonitor;
}

export interface IApp {
    company: string;
}

export interface INodeMonitor {}

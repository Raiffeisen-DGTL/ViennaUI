interface Snapshot {
    render: (any) => any;
    shallow: (any) => any;
    mount: (any) => any;
    screenshot: (any) => any;
    screenshots: (any) => any;
}

declare const snapshot: Snapshot;

declare namespace NodeJS {
    export interface Global {
        snapshot: Snapshot;
    }
}

declare namespace jest {
    interface Matchers<R> {
        toMatchScreenshot: (options?) => void;
        toMatchScreenshots: () => void;
    }
}

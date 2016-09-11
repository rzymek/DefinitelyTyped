///<reference path="../index.d.ts"/>
declare module _ {
    interface LoDashStatic {
        foo(): void;
        bar(): void
    }
}
declare var stubGetTime: number;
declare var element: any, data: any, mainText: any;
declare function asyncSave(arg: any);
declare function jQuery(arg: any): {
    on(s: string, callback: { (...args: any[]): any })
}
declare function addContactToList();
declare function calculateLayout();
declare function batchLog();
declare function sendMail();
declare class EventSource {
    constructor(s: string)
}
declare class Buffer {
    constructor(arg: number)
}
declare function createApplication();
declare function updatePosition();
declare function renewToken();
// declare function 
declare var fs: any, path: any, process: any;

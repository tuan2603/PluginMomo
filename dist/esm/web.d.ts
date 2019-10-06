import { WebPlugin } from '@capacitor/core';
import { MomoPluginPlugin } from './definitions';
export declare class MomoPluginWeb extends WebPlugin implements MomoPluginPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const MomoPlugin: MomoPluginWeb;
export { MomoPlugin };

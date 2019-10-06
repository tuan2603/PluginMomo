import { WebPlugin } from '@capacitor/core';
import { MomoPluginPlugin } from './definitions';

export class MomoPluginWeb extends WebPlugin implements MomoPluginPlugin {
  constructor() {
    super({
      name: 'MomoPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async payment(options: any): Promise<any> {
    console.log('ECHO', options);
    return options;
  }
}

const MomoPlugin = new MomoPluginWeb();

export { MomoPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(MomoPlugin);

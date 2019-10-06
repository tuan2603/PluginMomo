declare module "@capacitor/core" {
  interface PluginRegistry {
    MomoPlugin: MomoPluginPlugin;
  }
}

export interface MomoPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  payment(options: { 
    amount: number,
    merchantName: string,
    merchantCode: string,
    orderId: string,
    orderLabel: string,
    merchantNameLabel: string,
    total_fee: string,
    description: string,
   }): Promise<{
     amount : number,
     merchantName: string,
     merchantCode: string,
     orderId: string,
     orderLabel: string,
     merchantNameLabel: string,
     total_fee: string,
     description: string,
    }>;
}

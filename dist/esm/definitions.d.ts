declare module "@capacitor/core" {
    interface PluginRegistry {
        MomoPlugin: MomoPluginPlugin;
    }
}
export interface MomoPluginPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}

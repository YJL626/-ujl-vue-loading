import { Plugin } from 'Vue';

declare type PluginInstallFunction = Required<Pick<Plugin, 'install'>>['install'];
declare type loadingPlugin = PluginInstallFunction;
declare const loading: loadingPlugin;

export { loading };

import { Plugin } from 'vue';

declare type removeUndefined<T> = T extends undefined ? never : T;
declare type PluginInstallFunction = removeUndefined<Plugin['install']>;
declare const loading: PluginInstallFunction;

export { loading };

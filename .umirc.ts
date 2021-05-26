import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@alitajs/iframe',
  favicon: 'https://user-images.githubusercontent.com/11746742/104428726-c2c90300-55bf-11eb-9b84-d52a86050b9a.png',
  logo: 'https://user-images.githubusercontent.com/11746742/104428726-c2c90300-55bf-11eb-9b84-d52a86050b9a.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  styles: [`.__dumi-default-mobile-demo-layout{
    padding:0 !important
  }`]
});

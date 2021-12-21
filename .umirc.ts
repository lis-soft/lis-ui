import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base = '/lis-ui';
let publicPath = '/lis-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'Lis UI',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {},
  dynamicImport: {},
  base,
  publicPath,
});
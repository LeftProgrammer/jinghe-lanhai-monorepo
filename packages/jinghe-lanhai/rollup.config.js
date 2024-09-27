// import pkg from './package.json';
import vuePlugin from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import ts from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

// 创建打包文件的头部信息
// const createBanner = () => `/*!
//  * ${pkg.name} v${pkg.version}
//  * (c) ${new Date().getFullYear()} Your Name
//  * @license ISC
//  */`;

// 创建基础配置
const createBaseConfig = () => {
  return {
    input: 'src/index.ts', // 加载入口
    external: ['vue', 'axios', 'echarts'], // 外部依赖
    plugins: [
      peerDepsExternal(),
      vuePlugin({ css: true }),
      ts(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.vue', '.ts'],
        babelHelpers: 'bundled',
      }),
      resolve({ extensions: ['.vue', '.jsx', '.js', '.ts'] }),
      commonjs(),
      json(),
      scss(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      terser(), // 压缩代码
    ],
    output: {
      sourcemap: true,
      // banner: createBanner(),
      externalLiveBindings: false,
      globals: {
        vue: 'Vue',
        axios: 'axios',
        echarts: 'echarts',
      },
    },
  };
};

// 输出配置
export default [
  {
    ...createBaseConfig(),
    output: [
      {
        file: 'dist/jinghe-lanhai.esm.js',
        format: 'esm',
      },
      {
        file: 'dist/jinghe-lanhai.umd.js',
        format: 'umd',
        name: 'JingheLanhai', // 根据库的命名调整
      },
    ],
  },
];

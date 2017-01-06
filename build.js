const
  rollup = require('rollup'),
  commonjs = require('rollup-plugin-commonjs'),
  babel = require('rollup-plugin-babel'),
  name = 'sample';

rollup
  .rollup({
    entry: 'dist/main.js',
    plugins: [commonjs(), babel()]
  })
  .then(bundle => {
    // ES6形式で出力
    bundle.write({format: 'es6', dest: `dist/${ name }.es6.js`});
    // AMD形式で出力
    bundle.write({format: 'amd', dest: `dist/${ name }.amd.js`});
    // CommonJSで出力
    bundle.write({format: 'cjs', dest: `dist/${ name }.cjs.js`});
    // グローバル変数を使う形式で出力
    bundle.write({
      format: 'iife',
      dest: `dist/${ name }.js`,
      moduleName: name // iifeで出力する場合は、moduleNameの指定が必須
    });
  })
  .catch(error => {
    console.error(error);
  });

import vue from 'rollup-plugin-vue';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                format: 'esm',
                file: 'dist/library.mjs'
            },
            {
                format: 'cjs',
                file: 'dist/library.js'
            }
        ],
        plugins: [
            vue({ css: false}), peerDepsExternal(), css({ output: 'library.mjs.css' }), terser()
        ]
    }
]
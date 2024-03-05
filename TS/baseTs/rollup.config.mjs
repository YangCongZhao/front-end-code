import ts from 'rollup-plugin-typescript2'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import path from 'path'

export default {
    input:path.resolve('src/index.ts'),
    output:{
        file:path.resolve('dist/bundle.js'),
        format:'iife',
        sourcemap:true
    },
    plugins:[
        nodeResolve({
            extensions:['.js','.ts']
        }),
        ts({
            tsconfig:path.resolve('tsconfig.json')
        }),
        serve({
            open:true,
            openPage: '/index.html',
            port:3333
        })
    ]
}

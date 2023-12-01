import * as esbuild from "esbuild"
import { sassPlugin } from 'esbuild-sass-plugin'
import postcss from "postcss"
import tailwind from "tailwindcss"
import pkg from "./package.json" assert {type: "json"}
import chokidar from "chokidar"

const build = async () => {
    try {
        console.log("Building")
        await esbuild.build({
            entryPoints: ['src/index.ts', 'src/index.scss'],
            format: "esm",
            target: ["esnext"],
            bundle: true,
            plugins: [sassPlugin({
                async transform(input){
                    const {css} = await postcss([tailwind()]).process(input, {from: "./src/index.scss"})
                    return css
                } 
            }),],
            outdir: 'dist',
            external: [
                ...Object.keys(pkg.dependencies),
                ...Object.keys(pkg.peerDependencies || {})
            ],
        })
    } catch (error) {
        console.error(error)
    }
}

const watcher = chokidar.watch("./src/", {persistent: true, usePolling: false})
console.log(".... Watching changes ....")
watcher.on("change", build)
watcher.on("add", build)
watcher.on("addDir", build)
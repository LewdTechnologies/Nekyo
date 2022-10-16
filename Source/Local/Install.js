
import Paths from './Paths.js'
import { join } from 'Path'

const { writeTextFile , chmod } = Deno;

await writeTextFile(Paths.Binary,`#!/usr/bin/env sh\n\n~/.LewdTechnologies/Nekyo/Nekyo.js`,{
    mode : 0o755
})

await chmod(join(Paths.Data,'Nekyo.js'),0o755);

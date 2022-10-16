
import Paths from './Paths.js'

const { writeTextFile } = Deno;


await writeTextFile(Paths.Binary,`#!/usr/bin/env sh\n\n~/.LewdTechnologies/Nekyo/Nekyo.js`,{
    mode : 755
})
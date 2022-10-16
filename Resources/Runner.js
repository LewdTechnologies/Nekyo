#!/usr/bin/env -S deno run --unstable -A


import { fromFileUrl , dirname , join } 
from 'https://deno.land/std@0.159.0/path/mod.ts';

const directory = dirname(fromFileUrl(import.meta.url));

const 
    imports = join(directory,'ImportMap.json') ,
    path = join(directory,'Backend','App.js') ;

const { run } = Deno;

const process = run({
    cmd : [ 'deno' , 'run' , '--unstable' , '-A' , `--importmap=${ imports }` , path ],
    stdout : 'inherit' ,
    stderr : 'inherit'
})

await process.status();
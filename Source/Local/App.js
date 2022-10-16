#!/usr/bin/env -S deno run --unstable -A --importmap=Tools/ImportMap.json

import { fromFileUrl , dirname , join , normalize } 
from 'https://deno.land/std@0.159.0/path/mod.ts'


const { clear , log } = console;
const { run , env } = Deno;


const 
    home = env.get('HOME') ,
    deno = join(home,'.deno','bin','deno') ;

const 
    directory = dirname(fromFileUrl(import.meta.url)) ,
    imports = join(directory,'..','..','ImportMap.json') ,
    path = join(directory,'Install.js') ;


clear();

log('Installing Neko Bundle');

log('Running Deno from:',deno);


import { ensureDir , emptyDir , copy } from 'Files'
import Shortcut from './Shortcut.js'
import Paths from './Paths.js'


const { writeTextFile } = Deno;


await ensureDir(Paths.Config);

await emptyDir(Paths.Data);


const shortcut = Shortcut({
    icon : Paths.Icon ,
    path : Paths.Data
})

await writeTextFile(Paths.Shortcut,shortcut);


await copy(Paths.Build,Paths.Data,{
    overwrite : true
});



const process = run({
    cmd : [ 'sudo' , deno , 'run' , '--unstable' , '-A' , `--importmap=${ imports }` , path , `--home=${ home }`],
    stdout : 'inherit' ,
    stderr : 'inherit'
})

await process.status();

#!/usr/bin/env -S deno run --unstable -A

import { fromFileUrl , dirname , join , normalize } 
from 'https://deno.land/std@0.159.0/path/mod.ts'

import { ensureDir , emptyDir , copy } 
from 'https://deno.land/std@0.159.0/fs/mod.ts'

import { tmpdir }
from 'https://deno.land/std@0.159.0/node/os.ts'

import Shortcut from './Shortcut.js'
import Paths from './Paths.js'


const { clear , log } = console;
const { run , env } = Deno;


const 
    home = env.get('HOME') ,
    deno = join(home,'.deno','bin','deno') ;

const 
    directory = dirname(fromFileUrl(import.meta.url)) ,
    imports = join(directory,'..','ImportMap.json') ,
    path = join(directory,'Sudo.js') ;

const temp = join(tmpdir(),'Nekyo');

await emptyDir(temp);

const release = 'https://github.com/repos/LewdTechnologies/Nekyo/releases/latest/download/Nekyo.zip'

const zip = join(temp,'Release.zip')

clear();

log('Installing Neko Bundle');




const { writeTextFile } = Deno;




await ensureDir(Paths.Config);
await emptyDir(Paths.Data);


const shortcut = Shortcut({
    icon : Paths.Icon ,
    path : Paths.Data
})

await writeTextFile(Paths.Shortcut,shortcut);


try {
    
    await run({
        cmd : [ 'curl' , '--output' , zip , '-LJO' , release ],
        stdout : 'null' ,
        stderr : 'null'
    }).status();

    await run({
        cmd : [ 'unzip' , '-d' , Paths.Data , zip ],
        stdout : 'null' ,
        stderr : 'null'
    }).status();

    await Deno.remove(zip,{ recursive : true });


    log('Running Deno from:',deno);


    await run({
        cmd : [ 'sudo' , deno , 'run' , '--unstable' , '-A' , `--importmap=${ imports }` , path , `--home=${ home }`],
        stdout : 'inherit' ,
        stderr : 'inherit'
    }).status();

} catch (error) {
    console.error(error);
    Deno.remove(temp,{ recursive : true });
}


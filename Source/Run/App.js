#!/usr/bin/env -S deno run --unstable -A --importmap=Tools/ImportMap.json


import { join } from 'Path'


const 
    { clear , log } = console ,
    { run , env } = Deno ;


clear();

log('Running Neko Bundle');


const home = env
    .get('HOME');

const path = 
    join(home,'.LewdTechnologies','Nekyo','Nekyo.js');


log('Path:',path);


const config = {
    stdout : 'inherit' ,
    stderr : 'inherit' ,
    cmd : [ path ]
}

await run(config)
    .status();

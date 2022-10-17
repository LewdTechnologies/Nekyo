#!/usr/bin/env -S deno run --unstable -A --importmap=Tools/ImportMap.json


import { fromFileUrl , dirname , join , normalize } from 'Path'
import { parse } from 'Flags'

const { clear , log } = console;
const { run , args } = Deno;

clear();

const [ action ] = parse(args)._;

const actions = {
    install : [ 'Build' , 'Local' ] ,
    build : [ 'Build' ] ,
    run : [ 'Build' , 'Local' , 'Run' ]
}

const directory = dirname(fromFileUrl(import.meta.url));

if(action in actions)
    for(const part of actions[action])
        await runAction(part);


async function runAction ( type ){
    
    const path = join(directory,'Source',type,'App.js');
    
    const config = {
        stdout : 'inherit' ,
        stderr : 'inherit' ,
        cmd : [ path ]
    }

    await run(config)
        .status();
}

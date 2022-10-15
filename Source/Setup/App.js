#!/usr/bin/env -S deno run --allow-net=github.com --allow-read=. --allow-write=. --allow-run=git


import { join } from './ImportMap.js'

import repositories from './Repositories.js'
import clone from './Clone.js'


const { clear , log } = console;
const { cwd } = Deno;


clear();

log('Setting up your local environment!');

const directory = cwd();


for ( const repository of repositories )
    await cloneBranch ( repository );


async function cloneBranch ( branch ){
    await clone({
        repository : 'https://github.com/LewdTechnologies/Nekyo' ,
        directory : join(directory,branch) ,
        branch : branch
    })
}


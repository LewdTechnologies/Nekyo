#!/usr/bin/env -S deno run --unstable -A --importmap=Tools/ImportMap.json

import { emptyDir , ensureDir , copy } from 'Files'
import { join } from 'Path'
import Paths from './Paths.js'


const { clear , log } = console;


clear();

log('Building Nekyo Bundle');


await emptyDir(Paths.Build);


const bundle = 
    join(Paths.Build,'Nekyo');

await ensureDir(bundle);


const backend =
    join(bundle,'Backend');

await copy(Paths.Backend,backend);


const imports =
    join(bundle,'ImportMap.json');
    
await copy(Paths.Backend_Imports,imports);


const frontend =
    join(bundle,'Frontend');
    
await copy(Paths.Frontend,frontend);


const icon =
    join(bundle,'Icon.png');
    
await copy(Paths.Icon,icon);


const runner =
    join(bundle,'Nekyo.js');
    
await copy(Paths.Runner,runner);

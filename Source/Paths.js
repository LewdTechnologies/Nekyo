
import { fromFileUrl , dirname , join } 
from 'https://deno.land/std@0.159.0/path/mod.ts'

import { parse } 
from 'https://deno.land/std@0.142.0/flags/mod.ts'

const { env } = Deno;

let home = parse(Deno.args).home;

home ??= env.get('HOME');

const 
    directory = dirname(fromFileUrl(import.meta.url)) ,
    root = join(directory,'..','..') ;


const Shortcut = join(home,'.local','share','applications','Nekyo.desktop');

const Config = join(home,'.config','Nekyo');

const Build = join(root,'.Build','Nekyo');

const Data = join(home,'.LewdTechnologies','Nekyo');

const Icon = join(Data,'Icon.png');

const Exec = join(Data,'Nekyo.js');

const Binary = join('/','usr','bin','nekyo');


export default { Shortcut , Config , Build , Data , Icon , Exec , Binary }

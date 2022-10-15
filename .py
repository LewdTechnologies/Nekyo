#!/usr/bin/python3

import os


#
#   Install Deno
#

os.system('curl -fsSL https://deno.land/install.sh | sh')


#
#   Configure Bashrc
#

home = os.environ['HOME'];

bashrc = home + '/.bashrc'
deno = home + '/.deno'


with open(bashrc) as file :
    
    configured = False
    
    
    #   Check if .bashrc contains Deno export
    
    for line in file.readlines() :
        
        if 'DENO_INSTALL' in line :
            configured = True
            break
    
    
    #   If missing, add it
    
    if not configured :
    
        file.write('export DENO_INSTALL="' + deno + '"' + '\n')
        file.write('export PATH="$DENO_INSTALL/bin:$PATH"')


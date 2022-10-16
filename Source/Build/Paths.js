
import { fromFileUrl , dirname , join } from 'Path';


const 
    directory = dirname(fromFileUrl(import.meta.url)) ,
    root = join(directory,'..','..','..') ;


export default {
    
    Backend_Imports : join(root,'Backend','ImportMap.json') ,
    
    Frontend : join(root,'Frontend','Source') ,
    
    Backend : join(root,'Backend','Source') ,
    
    Runner : join(root,'Tools','Resources','Runner.js') ,
    
    Build : join(root,'.Build') ,
    
    Icon : join(root,'Tools','Resources','Icon.png')
    
}

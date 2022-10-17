
import { fromFileUrl , dirname , join } from 'Path';


const directory = 
    dirname(fromFileUrl(import.meta.url));

const root = 
    join(directory,'..');


export const Frontend =
    join(root,'Frontend');
    
export const Server =
    join(root,'Backend','Threads','Server.js');
    
export const WebView =
    join(root,'Backend','Threads','WebView.js');

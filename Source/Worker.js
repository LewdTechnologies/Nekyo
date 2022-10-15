
import { toFileUrl } from 'Path' 


const config = { 
    type : 'module' 
}


export default function workerFrom ( path ){
    
    const url = toFileUrl(path);
    
    return new Worker(url,config);
}

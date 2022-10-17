
import shutdown from './Shutdown.js'
import startup from './Startup.js'


let 
    active = false ,
    busy = false ;


function transitionTo ( state , process ){
    
    busy = true;
    
    await process();
    
    active = state;
    busy = false;
}


/**
 *  @brief Starts the downloader if OFF.
 */

export function start (){
    
    if(busy)
        return;
    
    if(active)
        return;
        
    transitionTo(true,startup);
}


/**
 *  @brief Stops the downloader if ON.
 */

export function stop (){
    
    if(busy)
        return;
    
    if(active)
        transitionTo(false,shutdown);
}


/**
 *  @brief Is the downloader currently ON.
 */

export function isActive (){
    return active;
}


/**
 *  @brief Is the downloader currently 
 *  transitioning between OFF <-> ON
 */

export function isBusy (){
    return busy;
}

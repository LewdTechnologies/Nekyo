
import workerFrom from './Worker.js'
import * as Path from './Paths.js'


const { clear , log } = console;

clear();


const 
    worker_webview = workerFrom(Path.WebView) ,
    worker_server = workerFrom(Path.Server) ;


await Promise.race([ 
    workerDone(worker_server) ,
    workerDone(worker_webview)
])   

worker_server.terminate();
worker_webview.terminate();


async function workerDone ( worker ){
    return new Promise((resolve) => {
        worker.addEventListener('message',({ data }) => {
            if(data === 'Done')
                resolve();
        })
    })
}
